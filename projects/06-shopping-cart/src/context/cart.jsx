import { createContext,useState } from "react";

// 1. Crear Contexto
export const CartContext = createContext() //Singleton - Solo se llama una vez

// 2. Crear Provider
// Los children es lo que envolvera
export function CartProvider ({children}){
    const [cart,setCart] = useState([]);
    const addToCart = product =>{
         //Check if the product already in the cart
        const productCartIndex = cart.findIndex(item => item.id === product.id)
        if(productCartIndex >= 0){
            //Una forma seria usando "structuredClone" - Nos permite hacer una copia profunda de un array
            const newCart = structuredClone(cart)
            newCart[productCartIndex].quantity += 1
            return setCart(newCart)
        }

        //If product is not in the cart

        setCart(prevState => ([
            prevState,
            {
                ...product,
                quantity:1
            }
        ]))

    }

    //Delete product from the cart
    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    //Delete all the products from the cart
    
    const clearCart= () => { setCart([

    ])}

    return(
        <CartContext.Provider value = {{
            cart,
            addToCart,
            removeFromCart,
            clearCart

        }}>
            {children}
        </CartContext.Provider>
    )
}

