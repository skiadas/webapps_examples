"use client";

import { useEffect, useReducer, Reducer, useContext } from 'react';
import { ActionBar } from './ActionBar';
import { Boundary } from './Boundary';
import Ball from './Ball';
import { makeBall, moveBalls, reassignColors } from '../core/BallData';
import { reduceState } from '../core/stateReducer';
import type { ActionType, GameState } from '../core/stateReducer';
import './App.css'
import { DispatchContext, StateContext } from '../core/stateContext';

function Header() {
    return <header>
        <h1>A simple web app</h1>
        <p>Watch the balls bounce around! Click them to earn their points!</p>
    </header>;
}

type CurrentPointProps = {
    points: number;
}

function CurrentPoints() {
    const { points } = useContext(StateContext)!;
    // if (!gameState) throw new Error("CurrentPoints needs to be within a StateContext provider");
    return <div className="action-bar">Current points: <span id="points">{points}</span></div>;
}
// Context:
// - A "context" class
// - use the context
// - provide the context

export default function App() {
    const [gameState, dispatch] = useReducer<Reducer<GameState, ActionType>>(reduceState, {
        points: 0,
        balls: [makeBall(), makeBall()]
    });

    useEffect(() => {
        const id = setInterval(() => { dispatch({ type: 'advance' }) }, 1000);
        return () => { clearInterval(id); };
    }, []);

    return <StateContext.Provider value={gameState}>
        <DispatchContext.Provider value={dispatch}>
            <Header />
            <aside>
                <CurrentPoints />
                <ActionBar />
            </aside>
            <Boundary>
                {gameState.balls.map((ball, i) => <Ball key={i} data={ball} onBallClick={(points) => dispatch({ 'type': 'add-points', points })} />)}
            </Boundary>
        </DispatchContext.Provider>
    </ StateContext.Provider>;
}