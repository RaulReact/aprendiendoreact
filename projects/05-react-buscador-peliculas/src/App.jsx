import './App.css'
import { useState, useEffect, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)
  //Usamos el hook de React 'UseRef' - Recuperamos el elemento del DOM (input) y lo guardamos en una referencia (Forma no controlada de React)
  //const inputRef = useRef()
  // Haria falta tambien en el input poner el atributo 'ref={inputRef}'
  // Y luego en la funcion "handle Submit" lo que esta comentado

  const handleSubmit = (event) => {
    // Gestionamos el formulario a traves de React con UseRef . Si tendriamos varios inputs necesitariamos varios useRef
    // const value = inputRef.current.value
    // console.log(value)

    //En este ultimo ejemplo lo estamos gestionando de forma descontrolada utilizando VanillaJS (informacion DOM) sin necesidad de React
    event.preventDefault()
    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
    console.log(query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' placeholder='The Avengers, Star Wars, The Matrix ....' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
