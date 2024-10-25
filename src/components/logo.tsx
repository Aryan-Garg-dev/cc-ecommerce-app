import { cn } from "@/lib/utils"

interface LogoProps {
  size: "small"|"medium"|"large",
  src: string,
  alt: string
}

export const Logo = ({ size, src, alt }: LogoProps)=>{
  return (
    <div className={cn(
      "size-9",
      size == "medium" && "size-16",
      size == "large" && "size-20"
    )}>
      <img src={src} alt={alt}></img>
    </div>
  )
}