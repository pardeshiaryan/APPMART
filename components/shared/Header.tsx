import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
// import NavItems from "./NavItems"
// import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full   bg-black-1 text-gray-400  border-b">
      <div className="wrapper h-12 flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/MySvg.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between md:flex md:flex-row hidden md:w-full md:max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-5 ">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut >
            <Button asChild className="rounded-full " size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header