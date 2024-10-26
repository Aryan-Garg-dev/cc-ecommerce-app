import { icons } from "@/assets";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const scrolled = useScrollTop(18);
  return (  
    <div className={cn("w-full fixed top-0 p-4 py-3 z-[99999] bg-gradient-to-r from-slate-300 via-stone-200 to-slate-300 flex justify-between", scrolled && "shadow-md" )}>
        <Link to="/" className="flex items-center select-none">
          <img src={icons.logo} alt="Shop-Karo" className="size-8 mx-5"/>
          <div className="font-bebas text-4xl font-semibold text-slate-900">Shop Karo</div>
        </Link>
        <div className="flex items-center">
          <Button variant={"link"} className="text-neutral-700 text-base font-poppins"><Link to="/">Home</Link></Button>
          <Button variant={"link"} className="text-neutral-700 text-base font-poppins"><Link to="/products">Products</Link></Button>
          <Link to="/cart">
            <Button variant={"ghost"} className="text-neutral-700 bg-slate-300 hover:bg-slate-300 hover:border-2 hover:border-slate-400 active:shadow-inner active:scale-95 text-base flex justify-center items-center">
              <FaCartShopping />
            </Button>
          </Link>
        </div>
    </div>
  );
}
 
export default Navbar;