import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'
import './index.css'

//Este main.jsx es nuestro punto de entrada de la aplicacion por eso partimos del componente <App/> que actua como raiz
//Encima de la etiqueta de <App></App> suele ir una etiqueta <React.StrictMode></React.StrictMode> o bien un fragement generico <></>

//En el caso de que utilizemos contexto y este se tenga que utilizar para toda la aplicacion tendremos que envolver toda la aplicacion con el mismo
// en este caso el contexto es FiltersProvider y por ello tenemos la aplicacion rodeada de esta etiqueta y no de otra genérica

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
