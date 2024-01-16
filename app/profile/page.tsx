import { authConfig } from "@/config/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata: Metadata = {
  title: "Profile | Next App",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Hello {session?.user?.name}</h1>
    </div>
  );
}
