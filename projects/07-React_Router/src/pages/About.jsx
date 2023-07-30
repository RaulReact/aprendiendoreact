import {Link, navigate} from '../Link.jsx'

export default function AboutPage(){
    return(
      <>
        <h1>About</h1>
        <p>Hola me llamo Raúl y estoy creando un clon de React Router a partir de las explicaciones de midu</p>
        <Link onClick={() => navigate('/')}>Ir a la home</Link>
      </>
    )
  }
  