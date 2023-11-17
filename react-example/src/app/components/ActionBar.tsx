import type { ActionType } from "./App";

function ButtonGroup({ children }) {
    return <div className="action-bar-group">
        {children}
    </div>

}

type ActionBarProps = {
    readonly dispatch: (action: ActionType) => void;
}

export function ActionBar({ dispatch }: ActionBarProps) {
    return <div className="action-bar">
        <ButtonGroup>
            <button id="changeColorsBtn" onClick={() => dispatch('random-colors')}>Random Colors!</button>
            <button id="changeSpeedsBtn" onClick={() => dispatch('random-speeds')}>Random Speeds!</button>
        </ButtonGroup>
        <ButtonGroup>
            <button id="more-balls" onClick={() => dispatch('more-balls')}><i className="fas fa-plus"></i></button>
            <button id="fewer-balls" onClick={() => dispatch('less-balls')}><i className="fas fa-minus"></i></button>
        </ButtonGroup>
        <ButtonGroup>
            <button id="play"><i className="fas fa-play"></i></button>
            <button id="stop"><i className="fas fa-stop"></i></button>
            <button id="slower"><i className="fas fa-gauge-simple-min"></i></button>
            <button id="faster"><i className="fas fa-gauge-simple-max"></i></button>
        </ButtonGroup>
    </div>;
}