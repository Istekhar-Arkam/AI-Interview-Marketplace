import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>
      {/* redirection logic */}



      {/* sign in */}
      <div className="flex item-center gap-3">
        <Show when="signed-out">
{/* link */}

{/* credit */}
          <SignInButton>
            <Button variant="ghost">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="gold">Get started</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}

export default Header;
