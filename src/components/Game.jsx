import { useEffect, useState } from "react";
import { SquareComponent } from "./SquareComponent"
import './game.css'

const cleargame = ["", "", "", "", "", "", "", "", "", ""];

const Game = () => {
    const [game, setgame] = useState(cleargame)
    const [xchance, setXchance] = useState(false)

    const onSquareClicked = (index) => {
        let strings = Array.from(game)
        strings[index] = xchance ? "X" : "O";
        setgame(strings)
        setXchance(!xchance)
    }

    useEffect(() => {
        const winner = checkWinner()
        if (winner) {
            alert(`Ta Da! ${winner} has won the game`)
            setgame(cleargame)
        }
    }, [game])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log(lines[0][2])
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (game[a] === game[b] && game[a] === game[c]) {
                return game[a];
            }
        }
        if ((game[0][0] !== game[0][1] && game[0][0] !== game[0][2]) &&
            (game[1][0] !== game[1][1] && game[1][0] !== game[1][2]) &&
            (game[2][0] !== game[2][1] && game[2][0] !== game[2][2]) &&
            (game[3][0] !== game[3][1] && game[3][0] !== game[3][2]) &&
            (game[4][0] !== game[4][1] && game[4][0] !== game[4][2]) &&
            (game[5][0] !== game[5][1] && game[5][0] !== game[5][2]) &&
            (game[6][0] !== game[6][1] && game[6][0] !== game[6][2]) &&
            (game[7][0] !== game[7][1] && game[7][0] !== game[7][2])) {
                alert("Match Drawn")
            return setgame(cleargame)
        }
    }

    return (
        <div className="app-header">
            <p className="heading-text">Tic Tac Toe</p>
            <div className=" row jc-center">
                <SquareComponent className="b-bottom-right" state={game[0]} onClick={() => onSquareClicked(0)} />
                <SquareComponent className="b-bottom-right" state={game[1]} onClick={() => onSquareClicked(1)} />
                <SquareComponent className="b-bottom" state={game[2]} onClick={() => onSquareClicked(2)} />
            </div>
            <div className=" row jc-center">
                <SquareComponent className="b-bottom-right" state={game[3]} onClick={() => onSquareClicked(3)} />
                <SquareComponent className="b-bottom-right" state={game[4]} onClick={() => onSquareClicked(4)} />
                <SquareComponent className="b-bottom" state={game[5]} onClick={() => onSquareClicked(5)} />
            </div>
            <div className=" row jc-center">
                <SquareComponent className="b-right" state={game[6]} onClick={() => onSquareClicked(6)} />
                <SquareComponent className="b-right" state={game[7]} onClick={() => onSquareClicked(7)} />
                <SquareComponent state={game[8]} onClick={() => onSquareClicked(8)} />
            </div>
            <button className="clear-button" onClick={() => setgame(cleargame)}>Start Again</button>
        </div>
    )
}

export { Game }