import { useState } from "react";
import confetti from "canvas-confetti";

//Constantes
import { TURNS } from "./constants";

//Componentes
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";

//Logic

import { checkWinnerFrom } from "./logic/board";
import { checkEndGame } from "./logic/board";


function App() {

  //Actualizacion del tablero
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ?
      JSON.parse(boardFromStorage) :
      Array(9).fill(null)
      
})

//Turnos de los jugadores
const [turn, setTurn] = useState(() => {
  const turnFromStage = window.localStorage.getItem('turn')
  return turnFromStage ? turnFromStage : TURNS.X

})
//Setear el Ganador
const [winner, setWinner] = useState(null) // Null es que no hay ganador


const resetGame = () => {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);

  //Cuando reseteamos el juego reseteamos tambien lo que hay en LocalStorage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}



const updateBoard = (index) => {

  //No actualizamos esta posicion si ya tiene algo o tenemos un ganador.
  // Con la siguiente linea se evita sobreescritura
  if (board[index] || winner) return

  //Siempre hay que pasar un array nuevo [], un objeto nuevo {} ...
  // En este caso se pasa un array nuevo utilizando el spread operator (...)

  const newBoard = [...board];
  newBoard[index] = turn
  setBoard(newBoard)

  //Cambiamos el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn);
  //Guardar partida
  //Se guarda el estado del tablero y a quien corresponde el turno
  window.localStorage.setItem('board', JSON.stringify(newBoard));
  window.localStorage.setItem('turn', newTurn);
  //revisar si hay ganador
  const newWinner = checkWinnerFrom(newBoard)
  if (newWinner) {
    confetti()
    setWinner(newWinner)
  } else if (checkEndGame(newBoard)) {
    setWinner(false)
  }
}

// Renderizado del juego 
return (
  <main className="board">
    <h1>Tic Tac Toe</h1>

    {/* Seccion para el juego */}
    <section className="game">
      {
        board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
    </section>

    {/* Seccion para los turnos */}

    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}</Square>
    </section>

    <WinnerModal resetGame={resetGame} winner={winner} ></WinnerModal>
  </main>
)
}

export default App
