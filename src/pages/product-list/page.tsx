import Banner from "@/components/banner";
import { bannerText } from "./constants";
import CategoryProducts from "./sections/CategoryProducts";
import { CATEGORY } from "@/types/product";
import Footer from "@/components/footer";

const ProductList = () => {
  return (  
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-slate-50">
      <Banner textBeforeSpan={bannerText} className="bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 py-1.5 shadow-sm" />
      <div className="w-full text-5xl font-[600] font-oswald px-10 py-2 text-slate-800">Discover Top Products</div>
      <div className="w-full self-start text-2xl font-raleway max-w-screen-lg px-10 py-2 text-slate-800">Browse our diverse product range, easily sorted by category and price to make shopping convenient and personalized for you.</div>
      <CategoryProducts 
        category={CATEGORY.mens} 
        containerClass="bg-gradient-to-b from-slate-50 to-blue-50"
        className="men"
      />
      <CategoryProducts 
        category={CATEGORY.womens} 
        titleClass="text-pink-900"
        containerClass="bg-gradient-to-b from-blue-50 to-pink-50"
        className="women"
        priceColor="#4a044e"
      />
      <CategoryProducts 
        category={CATEGORY.jewelery} 
        className="jewel"
        containerClass="bg-gradient-to-b from-pink-50 to-yellow-50"
        titleClass="text-yellow-900"
        priceColor="#78350f"
      />
      <CategoryProducts category={CATEGORY.electronics} 
        className="tech"
        priceColor="#09090b"
        titleClass="text-neutral-900"
        containerClass="bg-gradient-to-b from-yellow-50 to-gray-100"
      />
      <Footer className="from-slate-100 to-gray-200" />
    </div>
  );
}
 
export default ProductList;