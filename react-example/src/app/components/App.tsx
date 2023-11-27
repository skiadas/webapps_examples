"use client";

import { useContext } from 'react';
import { ActionBar } from './ActionBar';
import { Boundary } from './Boundary';
import Ball from './Ball';
import './App.css'
import { DispatchContext, StateContext } from '../core/stateContext';
import { useGameState } from './useGameState';

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

export default function App() {
    const [gameState, dispatch] = useGameState();

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