import { Cover } from "@/components/ui/cover";
import { bannerText, heroDescription } from "../constant";
import Banner from "../../../components/banner";
import TypingAnimation from "@/components/ui/typing-animation";

export default function HeroSection(){
  return (
    <section className="w-full border bg-purple-50 shadow-md shadow-purple-100">
      <Banner {...bannerText} />
      <div className="flex flex-col items-center max-sm:mt-2">
        <TypingAnimation
          className="text-8xl max-md:text-6xl font-bebas font-bold text-[#17153B] mt-2 tracking-wide"
          text="Shop Karo"
        />
        <div className="flex flex-col max-sm:gap-2 mt-1 mb-3">
          <h2 className="text-3xl max-md:text-2xl font-raleway text-center font-semibold">Swift Shopping, <Cover>Speedy Delivery.</Cover></h2>
          <p className="text-xl max-md:text-base px-5 mt-1 font-open_sans max-w-[720px] text-center text-[#17153B]">{heroDescription}</p>
        </div>
      </div>
    </section>
  )
}