import DeveloperTools from "@/components/DeveloperTools";
import { Button } from "@/components/ui/button";
import { ArrowRight ,Globe,Zap,Cpu,Search,BarChart,Network} from "lucide-react";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Decentralize Deployment",
      description:
        "Deploy and access your website forever for free on the blockchain.",
    },
    {
      icon: Zap,
      title: "Instant Preview & CI/CD",
      description:
        "Automatic deployments from GitHub with instant preview links and version control.",
    },
    {
      icon: Cpu,
      title: "AI Website Generator",
      description:
        "Generate a website using AI and deploy it directly to the blockchain.",
    },
    {
      icon: Search,
      title: "Decentralized Search Engine",
      description:
        "Our search engine has indexed all websites on the blockchain network.",
    },
    {
      icon: BarChart,
      title: "Analytics & Monitoring",
      description:
        "Real-time analytics dashboard and uptime monitoring for your decentralized websites.",
    },
    {
      icon: Network,
      title: "Decentralized CDN",
      description:
        "Utilize our decentralized content delivery network for faster and more reliable access.",
    },
  ];
 return(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
    <div className="min-h-screen p-8 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-black text-foreground" >
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
      <Link href={"/dashboard"}>
      <Button size="lg" className="mr-4" >
        Deploy your Website for free <ArrowRight className="ml-2"/>

      </Button>
      </Link>
      <Button size="lg" variant="outline">
        Learn how it works <ArrowRight></ArrowRight>
      </Button>

     
      
     </header>

     <main className="max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="font-semibold text-3xl mb-8">
          Revolutionary Web3 Hosting Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-col-2  lg:grid-cols-3 gap-10">
          {features.map((feature,index)=>(
            <div key={index}
            className="bg-[#090909] border border-1 p-6 rounded-xl transition-opacity duration-300 hover:opacity-80 hover:shadow-lg">
              <feature.icon className="h-12 w-12 mx-auto text-primary mb-4"/>
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>

            </div>


          ))}

        </div>

      </section>
     </main>
     <DeveloperTools/>
     <footer className="mt-10 text-center text-sm text-muted-foreground ">
      <p>&copy: All Right Reserved Http3 2024. 

      </p>
     </footer>

    </div>

  </ThemeProvider>

 )
 ;
}
