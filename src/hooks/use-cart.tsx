import { cartAtom } from "@/store/cartAtom";
import { useRecoilState } from "recoil";

const useCart = () => {
  const [ cart, setCart ] = useRecoilState(cartAtom);

  const addToCart = (id: string)=>{
    const updatedCart = cart.map(product =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    if (!updatedCart.find(product => product.id === id)) {
      updatedCart.push({ id, quantity: 1 });
    }
    setCart(updatedCart);
  }

  const removeFromCart = (id: string)=>{
    let updatedCart = cart.map(product =>
      product.id === id && product.quantity >= 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )
    updatedCart = updatedCart.filter(product => product.quantity !== 0);
    setCart(updatedCart);
  }

  const getOrderQty = (id: string)=>{
    const index = cart.findIndex(product=>product.id === id);
    if (index === -1) return 0;
    else return cart[index].quantity;
  }
  
  const ctx = {
    data: cart, 
    add: addToCart, 
    remove: removeFromCart,
    count: getOrderQty
  }

  return ctx;
}
 
export default useCart;