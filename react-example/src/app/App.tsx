"use client";
import { useState } from 'react';
import Ball from './Ball';
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

function ButtonGroup({ children }) {
   return <div className="action-bar-group">
    {children}
    </div>

}

export default function App() {
    const [points, setPoints] = useState<number>(0);
    return <>
        <Header />
        <aside>
            <CurrentPoints points={points} />
            <div className="action-bar">
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
            </div>
        </aside>
        <section className="boundary">
            <Ball color="purple" />
            <Ball />
        </section>
    </>;
}