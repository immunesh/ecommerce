import { useGlobal } from "../../context/GlobalContext";
import Cart from "../cart/Cart";
import CartItem from "../cart/CartItem";

function OrderSummary({orders}) {
   return ( 
    <>
        <Cart/>
    </>
);

}

export default OrderSummary;