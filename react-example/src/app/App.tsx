"use client";
import { useEffect, useState } from 'react';
import { ActionBar } from './ActionBar';
import { Boundary } from './Boundary';
import { makeBall, moveBalls } from './BallData';
import type { BallData, AllBallsType } from './BallData';
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
    const [points, setPoints] = useState<number>(0);
    const [balls, setBalls] = useState<AllBallsType>([makeBall(), makeBall()]);
    useEffect(() => {
        const id = setInterval(() => {
            console.log("happening");
            const newBalls = moveBalls(balls);
            setBalls(newBalls);
        }, 1000);
        return () => { clearInterval(id); };
    }, []);
    return <>
        <Header />
        <aside>
            <CurrentPoints points={points} />
            <ActionBar />
        </aside>
        <Boundary balls={balls} />
    </>;
}