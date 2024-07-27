"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
// import '../css/styles.css';


export default function Admin() {
  const { data: session } = useSession();
  if (session === null) {
    redirect("/landing");
  }

  return (
    <div>
        <p className="flex justify-center pt-20 text-7xl font-bold">Beacon Bridge</p>
        <p className="flex justify-center pt-5 text-l ">"Bridging the Gap Between Church and Community"</p>
      <div className="flex justify-end">
        <div className="login-container">
          <p>Loggedin User : {session.user === null? 'User Not Found' : session.user.name}</p>
          <button className='btn' onClick={() => signOut()}>Signout</button>
        </div>
      </div>
      <div className='main'>
        <div className='section'>
          <div className="flex p-10 justify-center ">Building Websites</div>
          <div className="flex flex-row justify-center">
            {/* <div className="flex flex-row justify-center p-5"> */}
              <div className="content">
              At Beacon Bridge, we create websites tailored specifically for churches. 
              We start with a conversation to understand your local community, outreach goals, 
              and specific challenges. Choose our prebuilt site designed with churches 
              in mind, or let us fully customize a site to meet your unique needs and vision. Whether 
              you need a straightforward solution or a complex, bespoke website, we are here to ensure 
              your site is a powerful tool for your ministry.
              </div>
            {/* </div>
            <div className="flex flex-row justify-center p-5">yes</div>
            <div className="flex flex-row justify-center p-5">yes</div> */}
          </div>
        </div>
        <div className='section'>
          <div className="flex p-10 justify-center ">Hosting Websites</div>
          <div className="content">
          Leave the technical worries to us. We provide reliable and secure hosting for your church website, 
          ensuring it is always accessible to your community. Our hosting solutions are designed to handle the specific 
          needs of church websites, providing the performance and reliability you can trust. Focus on your ministry while we 
          take care of keeping your site up and running smoothly.
          </div>
        </div>
        <div className='section'>
          <div className="flex p-10 justify-center ">SEO for Community Outreach</div>
          <div className="content">
          Reaching out to your local community is crucial, and our SEO services are designed to help you do just that. 
          We optimize your website to improve its visibility in search engines, making it easier for people in your area 
          to find you. Our targeted SEO strategies ensure that your church's message reaches those who need it most, 
          helping you grow your congregation and impact.
          </div>
        </div>
        <div className='section'>
          <div className="flex p-10 justify-center ">Simple Maintainance</div>
          <div className="content">
          We understand that maintaining a website can be time-consuming and costly. That's why we offer a unique
           maintenance solution: a separate, user-friendly website where anyone on your team can easily make updates and 
           changes to your main site. Unlike other vendors who charge per change, our system empowers you to keep your 
           content fresh and relevant without ongoing fees. Our continuous maintenance support ensures your website 
           remains up-to-date and fully functional at all times, enabling you to give the best possible experience for
           members of your church.
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}