import useScrollToTop from "@/hooks/use-scroll-to-top";
import Navbar from "../../components/navbar";

const ProductListLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  useScrollToTop();
  return (  
    <div className="relative w-full h-full min-h-screen bg-slate-50">
      <Navbar />
      <div className="w-full h-screen mt-16 z-0">
        {children}
      </div>
    </div>
  );
}
 
export default ProductListLayout;