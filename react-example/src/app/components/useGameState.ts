import { useReducer, useEffect, Reducer, Dispatch } from "react";
import { reduceState, GameState, ActionType } from "../core/stateReducer";
import { initialState } from "../core/stateReducer";

export function useGameState(): [GameState, Dispatch<ActionType>] {
    const [gameState, dispatch] = useReducer<Reducer<GameState, ActionType>>(reduceState, initialState);

    useEffect(() => {
        const id = setInterval(() => { dispatch({ type: 'advance' }) }, 100);
        return () => { clearInterval(id); };
    }, []);
    return [gameState, dispatch];
}