import { useState } from "react";
import Board from './components/Board';
import { launchConfetti } from "./utils/confetti";

function App(){
  const [score, setScore] = useState({ R: 0, G: 0 });
  const [startingPlayer, setStartingPlayer] = useState("R");
  const [gameKey, setGameKey] = useState(0);
  const [winner, setWinner] = useState(null);

  function handleWin(color){
    const newScore = {...score, [color]: score[color] + 1 };
    setScore(newScore);
    if(newScore[color] >= 3){
      setWinner(color);
      launchConfetti(color);
    } else {
      setStartingPlayer(startingPlayer === "R" ? "G" : "R")
      setTimeout(() => {
        setGameKey((prev) => prev + 1);
      }, 1000)
    }
  }

  function handleDraw(){
    setStartingPlayer(startingPlayer === "R" ? "G" : "R");
    setTimeout(() => {
        setGameKey((prev) => prev + 1);
    }, 1000)
  }

  function resetSeries(){
    setScore({ R: 0, G: 0 });
    setGameKey((prev) => prev + 1);
    setWinner(null);
    setStartingPlayer("R");
  }

  return (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="bg-white/90 rounded-xl shadow-xl p-8 w-full max-w-xl text-center sm:max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">
        Ta-Te-Ti de colores <span className="text-red-600">ROJO</span> vs{" "}
        <span className="text-green-600">VERDE</span>
      </h1>
      <p className="text-gray-600 mb-3">¡Gana la partida el mejor de 5!</p>
      <p className="mb-4 text-lg">
        <span className="text-red-500 font-semibold">Rojo:</span> {score.R} &nbsp;
        <span className="text-green-500 font-semibold">Verde:</span> {score.G}
      </p>

      {winner ? (
        <>
          <h2 className="text-2xl font-bold mb-4">
            GANADOR DE LA PARTIDA: <span className={winner === "R" ? "text-red-600" : "text-green-600"}>
              {winner === "R" ? "Rojo" : "Verde"}
            </span>{" "}
          </h2>
          <button
            onClick={resetSeries}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            REINICIAR PARTIDA
          </button>
        </>
      ) : (
        <Board
          key={gameKey}
          onWin={handleWin}
          onDraw={handleDraw}
          initialTurn={startingPlayer}
        />
      )}
    </div>
  </div>
);
}

export default App