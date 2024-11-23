import { ThemeProvider } from "next-themes";
import Image from "next/image";


export default function Home() {
 return(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
    <div className="min-h-screen p-8 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-background text-foreground" >
     <header className="mb-12 text-center" >
      <Image
      className="mx-auto text-white mb-4"
       src="/svg/lock-square-rounded.svg" 
       alt="Http3 logo"
       width={70}
       height={30}
       priority
      />
      <h1 className="text-bold text-5xl max-w-3xl mx-auto mb-4">
        The future of WebHosting {"     "}<br/>
        <span className="text-primary">Smart Contracts</span>

      </h1>
      <p className="text-xl text-gray-400  text-opacity-90 mb-8 max-w-2xl mx-auto">
            Host your legacy websites like calculators and unit converters on
            the blockchain, absolutely free! No hosting fees, no expiration
            dates. Preserve your simple web projects forever with HTTP3's
            decentralized hosting.
      </p>

     
      
     </header>

    </div>

  </ThemeProvider>

 )
 ;
}
