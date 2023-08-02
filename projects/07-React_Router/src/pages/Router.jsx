import { EVENTS } from "../../const"
import { useEffect,useState } from "react"
import { match } from "path-to-regexp"
import { Children } from "react"

export function Router({ children, routes = [] , defaultComponent:DefaultComponent =  () => 
<h1>404</h1> }) {
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
    
    let routeParams = {}

    //Añadir las rutas que vienen del "children" <Route> components
    const routesFromChildren = Children.map(children , ({props,type})=>{
        const {name} = type
        const isRoute = name === "Route"
        return isRoute ? props : null
    })
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true

    // hemos usado path-to-regexp
    // para poder detectar rutas dinámicas como por ejemplo
    // /search/:query <- :query es una ruta dinámica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // guardar los parámetros de la url que eran dinámicos
    // y que hemos extraído con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params
    return true

    //Optional Changing . El Oprtional Changiung evita que el metodo find, por ejemplo, haga romperla aplicacion cuando devuelve null
    //El Optional Changing es el "." que va despues de la "?"
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
  }
  