import { useState } from 'react'
import './App.css'


function HomePage(){
  return(
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde 0</p>
      <a href='/about'>Ir a sobre nosotros</a>
    </>
  )
}

function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>Hola me llamo Raúl y estoy creando un clon de React Router a partir de las explicaciones de midu</p>
      <a href='/'>Ir a la home</a>
    </>
  )
}

function App() {
  const [currentPath,setCurrentPath] = useState(window.location.pathname)
  return(
    <main>
      { currentPath === '/' && <HomePage/>}
      { currentPath === '/about' && <AboutPage/>}
    </main>
  )

}

export default App
