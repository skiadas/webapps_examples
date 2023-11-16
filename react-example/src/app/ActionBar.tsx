function ButtonGroup({ children }) {
    return <div className="action-bar-group">
        {children}
    </div>

}

export function ActionBar() {
    return <div className="action-bar">
        <ButtonGroup>
            <button id="changeColorsBtn">Random Colors!</button>
            <button id="changeSpeedsBtn">Random Speeds!</button>
        </ButtonGroup>
        <ButtonGroup>
            <button id="more-balls"><i className="fas fa-plus"></i></button>
            <button id="fewer-balls"><i className="fas fa-minus"></i></button>
        </ButtonGroup>
        <ButtonGroup>
            <button id="play"><i className="fas fa-play"></i></button>
            <button id="stop"><i className="fas fa-stop"></i></button>
            <button id="slower"><i className="fas fa-gauge-simple-min"></i></button>
            <button id="faster"><i className="fas fa-gauge-simple-max"></i></button>
        </ButtonGroup>
    </div>;
}