import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
       <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
Header dds
<Show when="signed-out">
              <SignInButton >
                <Button variant={"ghost"}>Sign in</Button>
              </SignInButton>
              <SignUpButton>
               <Button variant={"gold"}>Get Started </Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>

</nav>
  )
}

export default Header