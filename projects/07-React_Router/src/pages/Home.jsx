import { Link, navigate } from '../Link.jsx'

export default function HomePage(){
    return(
      <>
        <h1>Home</h1>
        <p>Esta es una pagina de ejemplo para crear un React Router desde 0</p>
        <Link onClick={() => navigate('/about')}>Ir a sobre nosotros</Link>
      </>
    )
  }