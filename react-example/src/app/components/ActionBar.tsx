import { DispatchContext } from "../core/stateContext";
import type { ActionType } from "../core/stateReducer";
import { Dispatch, useContext } from "react";

function ButtonGroup({ children }) {
    return <div className="action-bar-group">
        {children}
    </div>

}

type ActionBarProps = {
    // readonly dispatch: (action: ActionType) => void;
}

export function ActionBar() {
    const dispatch = useContext(DispatchContext)!;
    return <div className="action-bar">
        <ButtonGroup>
            <button id="changeColorsBtn" onClick={() => dispatch({ type: 'random-colors' })}>Random Colors!</button>
            <button id="changeSpeedsBtn" onClick={() => dispatch({ type: 'random-speeds' })}>Random Speeds!</button>
        </ButtonGroup>
        <ButtonGroup>
            <button id="more-balls" onClick={() => dispatch({ type: 'more-balls' })}><i className="fas fa-plus"></i></button>
            <button id="fewer-balls" onClick={() => dispatch({ type: 'less-balls' })}><i className="fas fa-minus"></i></button>
        </ButtonGroup>
        <ButtonGroup>
            <button id="play"><i className="fas fa-play"></i></button>
            <button id="stop"><i className="fas fa-stop"></i></button>
            <button id="slower"><i className="fas fa-gauge-simple-min"></i></button>
            <button id="faster"><i className="fas fa-gauge-simple-max"></i></button>
        </ButtonGroup>
    </div>;
}