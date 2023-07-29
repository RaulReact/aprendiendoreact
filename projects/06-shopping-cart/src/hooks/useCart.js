import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () =>{
    //We call the cart context
    const cart = useContext(CartContext);

    if (cart === undefined){
        throw new Error("useCart must be used within a CartProvider")
    }
    return cart
}