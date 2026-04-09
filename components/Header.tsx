import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './theme-toggle'

const Header = () => {
  return (
       <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
 <Link href="/">
        <Image
          src="/logo.png"
          alt="Prept Logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>
      <div className="flex items-center gap-3">
         <ModeToggle />
<Show when="signed-out">
              <SignInButton>
                <Button variant={"ghost"} >Sign in</Button>
              </SignInButton>
              <SignUpButton>
               <Button variant={"gold"}>Get Started </Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
            </div>

</nav>
  )
}

export default Header