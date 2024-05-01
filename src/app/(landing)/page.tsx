"use client" 

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-8">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master your skills with Triolingo
        </h1>
        <div className="flex flex-col gap-2 items-center max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                  mode="modal"
                  signInForceRedirectUrl="/learn"
                >
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full"  
                  >Get Started</Button>
                </SignUpButton>
              <SignInButton
                mode="modal"
                signUpForceRedirectUrl="/learn"
              >
                <Button 
                  size="lg" 
                  variant="primaryOutline"
                  className="w-full"  
                >
                  I already have an Account
                </Button>
              </SignInButton>
            </SignedOut>  
            <SignedIn>
              <Button asChild
                size="lg"
                variant="secondary"
                className="w-full"
              >
                <Link href="/learn">
                Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}