"use client";

import { useEffect, useState } from 'react';
import { ActionBar } from './ActionBar';
import { Boundary } from './Boundary';
import Ball from './Ball';
import { makeBall, moveBalls, reassignColors } from '../core/BallData';
import { reduceState } from '../core/stateReducer';
import type { ActionType, GameState } from '../core/stateReducer';
import './App.css'

function Header() {
    return <header>
        <h1>A simple web app</h1>
        <p>Watch the balls bounce around! Click them to earn their points!</p>
    </header>;
}

type CurrentPointProps = {
    points: number;
}

function CurrentPoints({ points }: CurrentPointProps) {
    return <div className="action-bar">Current points: <span id="points">{points}</span></div>;
}

export default function App() {
    const [gameState, setGameState] = useState<GameState>({
        points: 0,
        balls: [makeBall(), makeBall()]
    });
    const dispatch = (action: ActionType) => {
        setGameState(state => reduceState(state, action));
    }

    useEffect(() => {
        const id = setInterval(() => { dispatch({ type: 'advance' }) }, 1000);
        return () => { clearInterval(id); };
    }, []);

    return <>
        <Header />
        <aside>
            <CurrentPoints points={gameState.points} />
            <ActionBar dispatch={dispatch} />
        </aside>
        <Boundary>
            {gameState.balls.map((ball, i) => <Ball key={i} data={ball} onBallClick={(points) => dispatch({ 'type': 'add-points', points })} />)}
        </Boundary>
    </>;
}