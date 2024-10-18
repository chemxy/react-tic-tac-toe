import './App.css';
import {useState} from "react";

function App() {

    const [player, setPlayer] = useState(true);
    const [gridValues, setGridValues] = useState(new Array(9));

    function playerMove(gridNumber) {
        // console.log(gridNumber)
        let newGridValues = [...gridValues];
        const newValue = player ? "x" : "o";
        if (!newGridValues[gridNumber - 1]) {
            newGridValues[gridNumber - 1] = newValue;
            setPlayer(!player);
            setGridValues(newGridValues);
        }
    }

    return (
        <div className="app-background">
            <div className="canvas">
                <div className="row">
                    <button className="col cell border-bottom border-end border-5 border-black"
                            onClick={() => playerMove(1)}>{gridValues[0]}</button>
                    <button className="col cell border-bottom border-end border-5 border-black"
                            onClick={() => playerMove(2)}>{gridValues[1]}</button>
                    <button className="col cell border-bottom border-5 border-black"
                            onClick={() => playerMove(3)}>{gridValues[2]}</button>
                </div>
                <div className="row">
                    <button className="col cell border-bottom border-end border-5 border-black"
                            onClick={() => playerMove(4)}>{gridValues[3]}</button>
                    <button className="col cell border-bottom border-end border-5  border-black"
                            onClick={() => playerMove(5)}>{gridValues[4]}</button>
                    <button className="col cell border-bottom border-5 border-black"
                            onClick={() => playerMove(6)}>{gridValues[5]}</button>
                </div>
                <div className="row">
                    <button className="col cell border-end border-5 border-black"
                            onClick={() => playerMove(7)}>{gridValues[6]}</button>
                    <button className="col cell border-end border-5 border-black"
                            onClick={() => playerMove(8)}>{gridValues[7]}</button>
                    <button className="col cell" onClick={() => playerMove(9)}>{gridValues[8]}</button>
                </div>

            </div>
        </div>
    );
}

export default App;
