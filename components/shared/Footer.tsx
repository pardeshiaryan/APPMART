import { Html } from "next/document"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        
        <Link href='/'>
          <Image 
          src="/MySvg.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="pt-[5px]"> 2024 AAPMART. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer