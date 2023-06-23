export const Square = ({ children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    //Cuando el usuario hace click en el cuadrado le pasamos el indice para
    // saber en que cuadrado ha hecho indice
    const handleClick = () => {
      updateBoard(index)
    }
  
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }
  