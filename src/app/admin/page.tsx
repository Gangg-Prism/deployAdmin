"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import '../css/styles.css';


export default function Admin() {
  const { data: session } = useSession();
  if (session === null) {
    redirect("/landing");
  }

  return (
    <div>
      <p>
        This is admin page - private route.
        Pastors and other church leaders will be able to edit their church's website from this private route.
      </p>
      <button className="btn" onClick={() => signOut()}>Sign out</button>
    </div>
  );
}