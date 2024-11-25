import Link from "next/link"
import Image from "next/image"
export function Navbar(){
    return(
       <div className="bg-black">
        <nav className="flex  justify-between mb-1 py-3 pt-4 ms-6 px-4 border-collapse md:px-8 lg:px-16">
            <Link href="/" className="flex items-center gap-2">
            <Image 
            src="/svg/lock-square-rounded.svg"
            alt="http3 logo"
            height={40}
            width={40}
            priority 
            
            
            
            />
            <span className="  font-sans text-2xl font-semibold">HTTP3</span>
            </Link>
        </nav>
        </div>
    )
}