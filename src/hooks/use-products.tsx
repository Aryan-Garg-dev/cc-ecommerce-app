import { useEffect, useState } from "react";
import { Product } from "@/types/product"
import { endpoints } from "@/constants";
import axios from "axios"

const useProducts = (limit?: number)=>{
  const [ products, setProducts ] = useState<Product[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  let url = endpoints.getProducts;
  if (limit) url = `${url}?limit=${limit}`;
  useEffect(()=>{
    axios.get(url).then((response) => {
      setProducts(response.data);
      setLoading(false);
    }).catch(error=>{
      console.log(error);
      setLoading(false);
    })
  }, [url]);
  return { products, loading };
}

export default useProducts;
