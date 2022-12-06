import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../Store/Action";

const Cart=()=>{
const dispatch=useDispatch();
const cartData = useSelector((state) => state.cartDataReducer?.productData);
console.log(cartData);


useEffect(()=>{
    cartAction(dispatch)
},[])

    return(
        <>
        <div>cart</div>
        </>
    );
}
export default Cart;