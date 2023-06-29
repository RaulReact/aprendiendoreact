import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [laoding, setLoading] = useState(false)
  const [error, setError] = useState(null)
  //Utilizamos el useRef para buscar la busqueda anterior y que no se vuelve a buscar lo mismo
  // dos veces si buscamos exactamente lo mismo. Evitamos que se vuelva a renderizar el componente 
  // guardando la referencia del mismo con el useRef
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
      // En el finally se ejecuta tanto en el try como en el catch
        setLoading(false)
      }
    }
  }, [])

  //   const sortedMovies = sort 
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies

  //Uso del UseMemo ---> Hook muy interesante que memoriza lo anteriormente calculado en funcion de unas
  // dependencias. Es decir, si cambia el sort ([sort,movies]) o las peliculas volvera a ordenar sino no 

  const sortedMovies = useMemo(() =>{
    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, laoding }
}
