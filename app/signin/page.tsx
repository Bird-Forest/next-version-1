import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";
import React from "react";

export default async function Signin() {
  return (
    <div>
      <h2>SignIn</h2>
      <GoogleButton />
      <h3>or</h3>
      <SignInForm />
    </div>
  );
}
