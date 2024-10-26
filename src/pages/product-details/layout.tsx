
import Navbar from "@/components/navbar";

const ProductDetailsLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
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