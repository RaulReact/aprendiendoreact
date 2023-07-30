import { EVENTS } from "../../const"
import { useEffect,useState } from "react"
export function Router({ routes = [] , defaultComponent:DefaultComponent = () => <h1>404</h1> }){
    const [currentPath,setCurrentPath] = useState(window.location.pathname)
    //La primera vesz que se ejecuta el componente ... Por eso utilizamos useEffect
  
    useEffect( () =>{
      const onLocationChange = () =>{
        setCurrentPath(window.location.pathname)
      }
      //EJECUTAMOS LOS EVENTOS
  
      //Evento de navegacion hacia delante
      window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
      //El 'popstate' es el evento que lanza el navegador cuando vas hacia atras
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () =>{
        //LIMPÌAMOS LOS EVENTOS
  
        window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
  
    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page/> : <DefaultComponent/>
  }
  