import SearchPage from './pages/Search'
import Page404 from './pages/404.jsx'
import { lazy } from 'react'
import { Router } from './pages/Router'
import { Route } from './pages/Route'
import './App.css'
import { Suspense } from 'react'

//El lazy hace referencia al "LazeLaoding" nois permite cargar un componente/página cuando necesitemos llamarla/mostrarla
//Si vamos a una pagina no deberian cargarse otras paginas sino las hemos abierto, para eso en vez de cargar la pagina con el
//import AboutPage from './pages/About' utilizamos el lazy que vemos debajo. Esto se aplicara a todas las paginas que queramos
// no tener precargadas. El cargar la pagina o paginas solo cuando las necesitemos afectara positivamente al rendimiento de la aplicacion

const LazyHomePage = lazy (() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))


//Crear componente Router

const appRoutes = [
  {
    path:'/:lang/about',
    Component:LazyAboutPage
  },
  {
    path:'/search/:query',
    Component: SearchPage
  }
]

function App() {
  return(
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage}/>
          <Route path='/about' Component={LazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
