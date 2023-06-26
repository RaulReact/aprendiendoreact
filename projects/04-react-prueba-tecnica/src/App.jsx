import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"
import { Otro } from "./Components/Otro"
import './App.css'



export function App() {
    
    const {fact, refreshRandomFact } = useCatFact()
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
       refreshRandomFact()
    }

    return (
        <main>
        <h1>App de gatitos</h1>
  
        <button onClick={handleClick}>Get new fact</button>
  
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}
      </main>
    )
}