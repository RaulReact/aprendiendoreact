import { EVENTS } from '../const'

export function navigate (href){
    window.history.pushState({},'',href)
    //Crear un evenyto personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    //Enviamos el evento
    window.dispatchEvent(navigationEvent)
}

export function Link({ target,to,...props} ){
    const handleClick = (event) =>{
        //Ponemos el preventDefault para evitar el comportamiento por defacto del enlace "<a></a>"
        // evitando asi que se recarge la pagina por completo en vez de solo la parte necesaria
        event.preventDefault()

        const isMainEvent = event.button === 0 // primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to) //Navegacion con spa
        }
        
    }

    return <a onClick={handleClick} href={to} target = {target} {...props} />

}