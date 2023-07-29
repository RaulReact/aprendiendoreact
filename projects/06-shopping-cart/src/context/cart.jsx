import { createContext,useReducer,useState } from "react";

const initialState = []
// Reducer - Transforma el estado (state) a traves de una accion(action) a partir
// de un nuevo estado. Devuelve un estado

const reducer = (state,action)=>{
    const {type:actionType, payload: actionPayload} = action
    switch(action.type){
        case 'ADD_TO_CART':{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if(productInCartIndex >= 0){
                //Una forma seria usando "structuredClone" - Nos permite hacer una copia profunda de un array
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload, // product
                    quantity:1
                }
            ]
        }
        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            return state.filter(item => item.id !== id)
        }

        case 'CLEAR_CART': {
            return initialState;
        }
    }

    return state
}
// 1. Crear Contexto
export const CartContext = createContext() //Singleton - Solo se llama una vez

// 2. Crear Provider
// Los children es lo que envolvera
export function CartProvider ({children}){
    
    //Una vez que tenemos creado el reducer utilizamos el hook "useReducer"
    //Aqui algo muy interesante porque aparece el metodo o la funcion dispatch
    // que va a ser el encargado de enviar las acciones a el reducer
    
    const [state,dispatch] = useReducer(reducer,initialState)

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

