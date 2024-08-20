# Use the official Node.js image as a base
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Use the official Node.js image for production
FROM node:20-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy the built Next.js app from the builder stage
COPY --from=builder /app/next.config.js /app/next.config.js
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port that the app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
