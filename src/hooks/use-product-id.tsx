import { endpoints } from "@/constants";
import { Product } from "@/types/product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useProductId(id: string){
  const [ product, setProduct ] = useState<Product>();
  const [ loading, setLoading ] = useState<boolean>(true);
  const url = `${endpoints.getProducts}/${id}`;
  useEffect(()=>{
    axios.get(url).then((response) => {
      setProduct(response.data);
      setLoading(false);
    }).catch(error=>{
      console.log(error);
      setLoading(false);
    })
  }, [url]);
  return { product, loading };
}