
import Navbar from "@/components/navbar";
import useScrollToTop from "@/hooks/use-scroll-to-top";

const ProductDetailsLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  useScrollToTop();
  return (  
    <div className="relative w-full h-full min-h-screen">
    <Navbar />
    <div className="w-full h-screen mt-16 z-0">
      {children}
    </div>
  </div>
  );
}
 
export default ProductDetailsLayout;