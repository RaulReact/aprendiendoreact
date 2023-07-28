import {products as initialProducts} from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'



function App() {
  const [products] = useState(initialProducts);
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer/>}
    </>
  )
}

export default App
