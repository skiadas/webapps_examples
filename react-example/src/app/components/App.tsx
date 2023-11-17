"use client";
import { useEffect, useState } from 'react';
import { ActionBar } from './ActionBar';
import { Boundary } from './Boundary';
import { makeBall, moveBalls, reassignColors } from '../core/BallData';
import type { BallData, AllBallsType } from '../core/BallData';
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

export type ActionType = 'random-colors' | 'random-speeds' | 'more-balls' | 'less-balls';

export default function App() {
    const [points, setPoints] = useState<number>(0);
    const [balls, setBalls] = useState<AllBallsType>([makeBall(), makeBall()]);

    const increasePoints = (ballPoints: number) => {
        setPoints(points => points + ballPoints);
    };

    useEffect(() => {
        const id = setInterval(() => { setBalls(moveBalls); }, 1000);
        return () => { clearInterval(id); };
    }, []);

    const dispatch = (action: ActionType) => {
        switch (action) {
            case 'random-colors': setBalls(reassignColors); return;
            case 'random-speeds': return;
            case 'more-balls': setBalls([...balls, makeBall()]); return;
            case 'less-balls': setBalls(balls.slice(0, -1)); return;
        }
    }

    return <>
        <Header />
        <aside>
            <CurrentPoints points={points} />
            <ActionBar dispatch={dispatch} />
        </aside>
        <Boundary balls={balls} onBallClick={increasePoints} />
    </>;
}