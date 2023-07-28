import { createContext, useState } from "react";

//1. Crear el Contexto
//Este el contexto que tenemos que consumir
export const FiltersContext = createContext()

//2. Crear el Provider , para proveer el contexto
//Este es el que nos provee de acceso al contexto

export function FiltersProvider ({children}){
    const [filters,setFilters] = useState({
        category:'all',
        minPrice:0
    })
    return(
        <FiltersContext.Provider value={
            {
                //3. Definir el estado inicial
                filters,
                setFilters
            }
        }>
            {/* Lo que tendria que embolver el Provider es lo que le pasemos por aqui, en este caso envuelve children */}
            {children}
        </FiltersContext.Provider>
    )
}