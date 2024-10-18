import './App.css';

function App() {
    return (
        <div className="app-background">
            <div className="canvas">
                <div className="row">
                    <button className="col cell border-bottom border-end border-5 border-black"></button>
                    <button className="col cell border-bottom border-end border-5 border-black"></button>
                    <button className="col cell border-bottom border-5 border-black"></button>
                </div>
                <div className="row">
                    <button className="col cell border-bottom border-end border-5 border-black"></button>
                    <button className="col cell border-bottom border-end border-5  border-black"></button>
                    <button className="col cell border-bottom border-5 border-black"></button>
                </div>
                <div className="row">
                    <button className="col cell border-end border-5 border-black"></button>
                    <button className="col cell border-end border-5 border-black"></button>
                    <button className="col cell"></button>
                </div>

            </div>
        </div>
    );
}

export default App;
