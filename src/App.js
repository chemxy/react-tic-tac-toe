import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [player, setPlayer] = useState(true);
    const [gridValues, setGridValues] = useState(new Array(10));
    const [isGameOver, setIsGameOver] = useState(false);

    function playerMove(gridNumber) {
        // console.log(gridNumber)
        let newGridValues = [...gridValues];
        const newValue = player ? "x" : "o";

        if (!isGameOver && !newGridValues[gridNumber]) {
            newGridValues[gridNumber] = newValue;
            setPlayer(!player);
            setGridValues(newGridValues);
        }
    }

    function detectWinner() {
        if (gridValues[1] === gridValues[2] && gridValues[2] === gridValues[3])
            return gridValues[1];
        else if (gridValues[4] === gridValues[5] && gridValues[5] === gridValues[6])
            return gridValues[4];
        else if (gridValues[7] === gridValues[8] && gridValues[8] === gridValues[9])
            return gridValues[7];
        else if (gridValues[1] === gridValues[4] && gridValues[4] === gridValues[7])
            return gridValues[1];
        else if (gridValues[2] === gridValues[5] && gridValues[5] === gridValues[8])
            return gridValues[2];
        else if (gridValues[3] === gridValues[6] && gridValues[6] === gridValues[9])
            return gridValues[3];
        else if (gridValues[1] === gridValues[5] && gridValues[5] === gridValues[9])
            return gridValues[1];
        else if (gridValues[3] === gridValues[5] && gridValues[5] === gridValues[7])
            return gridValues[3];
        return false;
    }

    useEffect(() => {
        if (detectWinner()) {
            console.log("winner: " + detectWinner());
            setIsGameOver(true);

        }
    }, [player, gridValues]);

    return (
        <div className="app-background">
            <div className="canvas">
                <div className="row">
                    <button className="col cell border-bottom border-end border-5 border-black"
                            onClick={() => playerMove(1)}>{gridValues[1]}</button>
                    <button className="col cell border-bottom border-end border-5 border-black"
                            onClick={() => playerMove(2)}>{gridValues[2]}</button>
                    <button className="col cell border-bottom border-5 border-black"
                            onClick={() => playerMove(3)}>{gridValues[3]}</button>
                </div>
                <div className="row">
                    <button className="col cell border-bottom border-end border-5 border-black"
                            onClick={() => playerMove(4)}>{gridValues[4]}</button>
                    <button className="col cell border-bottom border-end border-5  border-black"
                            onClick={() => playerMove(5)}>{gridValues[5]}</button>
                    <button className="col cell border-bottom border-5 border-black"
                            onClick={() => playerMove(6)}>{gridValues[6]}</button>
                </div>
                <div className="row">
                    <button className="col cell border-end border-5 border-black"
                            onClick={() => playerMove(7)}>{gridValues[7]}</button>
                    <button className="col cell border-end border-5 border-black"
                            onClick={() => playerMove(8)}>{gridValues[8]}</button>
                    <button className="col cell" onClick={() => playerMove(9)}>{gridValues[9]}</button>
                </div>

            </div>
        </div>
    );
}

export default App;
