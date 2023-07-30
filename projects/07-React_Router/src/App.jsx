import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './pages/Router'
import './App.css'
import Page404 from './pages/404.jsx'

//Crear componente Router

const appRoutes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component:AboutPage
  }
]

function App() {
  return(
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
