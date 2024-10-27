// import { ModeToggle } from "@/components/mode-toggle";

import HeroSection from "./sections/hero";
import Trending from "./sections/trending";
import BestSellers from "./sections/bestsellers";
import Footer from "@/components/footer";
import LinkRoute from "./components/LinkRoute";

const HomePage = () => {
  return (  
    <div className="w-full h-full min-h-screen flex flex-col items-center">
      <HeroSection />
      <Trending />
      <BestSellers />
      <div className="w-full py-4 bg-gradient-to-b from-slate-200 from-[10%] via-gray-200 via-[40%] to-gray-300 flex justify-center"><LinkRoute text={"Explore"} to={"/products"} containerClass="my-3" /></div>          
      <Footer />
    </div>
  );
}
 
export default HomePage; 