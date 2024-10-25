import { icons } from "@/assets"
import "./page.css"
import FlickeringGrid from "@/components/ui/flickering-grid"
import { useWindowSize } from "usehooks-ts"

export const Loading = ()=>{
  const { width, height } = useWindowSize();
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
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
      <div className="flex flex-col justify-center items-center space-y-4 relative w-full h-full min-h-screen select-none bg-transparent">
        <div className="border-4 flex flex-col justify-center items-center space-y-4 md:size-64 size-56 rounded-full z-[99999] border-violet-950 bg-white shadow-all-directions shadow-purple-400 animate-ripple">
          <img src={icons.logo} className="animate-pulse md:size-16 size-12" />
          <div className="font-poppins text-2xl md:text-3xl font-semibold animate-pulse">Loading...</div>
        </div>
      </div>
    </div>
  )
}