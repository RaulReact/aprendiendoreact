import {products as initialProducts} from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'



function App() {
  const [products] = useState(initialProducts);
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App
