import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";

const NotFound = () => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full min-h-screen flex justify-center items-center bg-primary-foreground">
      <FlickeringGrid 
        className="z-0 absolute inset-0 size-full" 
        squareSize={4}
        gridGap={6}
        color="#3B1E54"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={height}
        width={width}
      />
        <div className="absolute flex flex-col items-center border-2 border-b-violet-700 border-r-violet-800 border-t-violet-900 border-l-violet-950  p-8 gap-2 rounded-lg bg-white max-w-[550px] mx-2 max-sm:mx-5 shadow-inner shadow-gray-400">
          <div
            className={cn(
              "group rounded-full border border-b-violet-700 border-r-violet-800 border-t-violet-900 border-l-violet-950 hover:border-neutral-400 bg-violet-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 shadow-md hover:shadow-sm shadow-violet-300",
            )}
            onClick={()=>navigate("/")}
          >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
            <span className="bg-gradient-to-r from-violet-950 via-violet-900 to-violet-800 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent group-hover:text-current group-hover:bg-current font-poppins select-none">Shop Karo</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-active:translate-x-1 text-violet-800 group-hover:text-current" />
          </AnimatedShinyText>
          </div>
          <p className="max-sm:text-2xl text-3xl md:text-4xl text-center font-poppins font-semibold text-black">The page you’re looking for can’t be found.</p>
        </div>
    </div>
  );
};

export default NotFound;
