"use client";

import { useContext, useEffect, useRef } from 'react';
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
    const borderRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (borderRef.current) {
            const el = borderRef.current;
            dispatch({ type: 'set-dimensions', dimensions: [el.clientWidth, el.clientHeight] });
        }
    }, []);
    return <StateContext.Provider value={gameState}>
        <DispatchContext.Provider value={dispatch}>
            <Header />
            <aside>
                <CurrentPoints />
                <ActionBar />
            </aside>
            <Boundary ref={borderRef}>
                {gameState.balls.map((ball, i) => <Ball key={i} data={ball} onBallClick={(points) => dispatch({ 'type': 'add-points', points })} />)}
            </Boundary>
        </DispatchContext.Provider>
    </ StateContext.Provider>;
}