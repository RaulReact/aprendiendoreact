import { useState, } from "react"
import { useId } from "react"

export function Filters( {onChange}) {
    const [minPrice,setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" 
                    id={minPriceFilterId} 
                    min='0' 
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Vategoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smarthphones'>Moviles</option>
                    <option value='home-decoration'>Cosas de Casa</option>   
                </select>
            </div>
        </section>
    )
}