import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";
import { GrayTitleComponent ,GoldTitleComponent} from "@/components/reusables";
import { Badge } from "@/components/ui/badge";


export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
   <section className="min-h-screen p-10 pt-28 sm:pt-32 relative grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden"> 
    <StarsBackgroundDemo/>
       <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2">
          <Badge variant="gold">Powered by AI — Now in Beta</Badge>

          <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitleComponent>Ace your next interview</GrayTitleComponent>
            <br />
            <GoldTitleComponent>with real experts</GoldTitleComponent>
          </h1>

          <p className="relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed">
            Book 1:1 mock interviews with senior engineers from top companies.
            Get AI-powered feedback, role-specific questions, and the confidence
            to land your dream job.
          </p>
          </div>
   </section>
  </div>
  );
} 
