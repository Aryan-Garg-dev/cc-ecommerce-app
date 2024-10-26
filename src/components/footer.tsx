import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = ({ 
  className
}: {
  className?: string
}) => {
  const navigate = useNavigate();
  const LinkTo = (url: string)=>{
    return ()=>navigate(url);
  }
  return (  
    <div className={`w-full min-w-screen flex max-md:flex-col-reverse max-md:gap-2 justify-between item-center px-5 py-4 bg-gradient-to-b from-gray-300 to-gray-400 ${className}`}>
      <div className="font-montserrat flex items-center ml-5">© 2024 Shop Karo, Inc. All rights reserved</div>
      <div className="flex items-center max-md:justify-start">
        <Button variant={"link"} className="text-gray-800 font-montserrat font-normal text-base" onClick={LinkTo("/terms-of-use")}>Terms of use</Button>
        <Button variant={"link"} className="text-gray-800 font-montserrat font-normal text-base" onClick={LinkTo("/terms-of-sale")}>Terms of sale</Button>
      </div>
    </div>
  );
}
 
export default Footer;