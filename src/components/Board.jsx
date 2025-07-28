import { useState } from "react";
import Square from "./Square";

const WINNING_COMBOS = [
    [0,1,2],[3,4,5],[6,7,8], //rows
    [0,3,6],[1,4,7],[2,5,8], //columns
    [0,4,8],[2,4,6]          //diagonals
];

export default function Board({ onWin, onDraw, initialTurn }){
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(initialTurn);

    function handleClick(index){
        if(squares[index] || checkWinner(squares)) return;
        const next = squares.slice();
        next[index] = turn;
        setSquares(next);
        const winner = checkWinner(next);
        if(winner){
            onWin(winner);
        } else if(next.every(Boolean)) {
            onDraw();
        } else {
            setTurn(turn === "R" ? "G" : "R");
        }
    }

    function checkWinner(cells) {
        for(let combo of WINNING_COMBOS){
            const [a,b,c] = combo;
            if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
                return cells[a];
            }
        }
        return null;
    }

    return(
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-3 w-[300px] sm:w-[360px]">
                {squares.map((value, i) => (
                    <Square key={i} value={value} onClick={() => handleClick(i)} />
                ))}
            </div>
        </div>
    );
}