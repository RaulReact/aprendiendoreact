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
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get New Fact</button>
            <section>
                
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extrated using the first
                three words for ${fact}`} />}
            </section>
            <Otro/>
        </main>
    )
}