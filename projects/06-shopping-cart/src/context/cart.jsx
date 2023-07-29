import { createContext,useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

// 1. Crear Contexto
export const CartContext = createContext() //Singleton - Solo se llama una vez

// 2. Crear Provider
// Los children es lo que envolvera
export function CartProvider ({children}){
    
    //Una vez que tenemos creado el reducer utilizamos el hook "useReducer"
    //Aqui algo muy interesante porque aparece el metodo o la funcion dispatch
    // que va a ser el encargado de enviar las acciones a el reducer
    
    const [state,dispatch] = useReducer(cartReducer,cartInitialState)

    const addToCart = product => dispatch({
        type:'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type:'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({type:'CLEAN_CART'})

    return(
        <CartContext.Provider value = {{
            cart:state,
            addToCart,
            removeFromCart,
            clearCart

        }}>
            {children}
        </CartContext.Provider>
    )
}

