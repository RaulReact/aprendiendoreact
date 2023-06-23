import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        //Si todos los elementos son iguales se ha ganado la partida y se devuelve el ganador
        boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //Si no hay ganador
    return null
  }


export const checkEndGame = (newBoard) =>{
    //Revisamos si hay un empate al no haber mas espacios vacios en el juego
    //El every es una funcion que devuelve true
    return newBoard.every((square) => square !== null)

  }
