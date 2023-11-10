import './App.css'

export default function App() {
    return <>
        <header>
            <h1>A simple web app</h1>
            <p>Watch the balls bounce around! Click them to earn their points!</p>
        </header>
        <aside>
            <div className="action-bar">Current points: <span id="points">0</span></div>
            <div className="action-bar">
                <div className="action-bar-group">
                    <button id="changeColorsBtn">Random Colors!</button>
                    <button id="changeSpeedsBtn">Random Speeds!</button>
                </div>
                <div className="action-bar-group">
                    <button id="more-balls"><i className="fas fa-plus"></i></button>
                    <button id="fewer-balls"><i className="fas fa-minus"></i></button>
                </div>
                <div className="action-bar-group">
                    <button id="play"><i className="fas fa-play"></i></button>
                    <button id="stop"><i className="fas fa-stop"></i></button>
                    <button id="slower"><i className="fas fa-gauge-simple-min"></i></button>
                    <button id="faster"><i className="fas fa-gauge-simple-max"></i></button>
                </div>
            </div>
        </aside>
        <section className="boundary">
            <div className="ball" style={{ backgroundColor: "purple" }}></div>
            <div className="ball"></div>
        </section>
    </>;
}