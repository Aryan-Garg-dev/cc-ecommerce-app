import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom"

const LinkRoute = ({
   text, to, containerClass, textClass, arrowClass 
  }: { 
    text: string, 
    to: string,
    containerClass?: string,
    textClass?: string,
    arrowClass?: string
  }) => {
  return (  
    <Link to={to}>
      <div className={`inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 group hover:underline ${containerClass}`}>
        <span className={`font-bebas select-none text-5xl ${textClass}`}>{text}</span>
        <ArrowRightIcon className={`ml-1 size-8 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 ${arrowClass}`} />
      </div>
    </Link>
  );
}
 
export default LinkRoute;