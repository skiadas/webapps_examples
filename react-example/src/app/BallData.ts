import { generateColor, randomAngle, randomInside, randomInt } from "./utils";

export type BallData = {
    readonly x: number;
    readonly y: number;
    readonly direction: number;
    readonly speed: number;
    readonly color: { bgColor: string, color: string };
    readonly points: number;
};

export type AllBallsType = ReadonlyArray<BallData>;


export function makeBall(): BallData {
    return {
        x: randomInside(600, 20),
        y: randomInside(600, 20),
        direction: randomAngle(),
        speed: 5,
        color: generateColor(),
        points: randomInt(1, 20)
    }
}

export function moveBalls(balls: AllBallsType): AllBallsType {
    return balls.map((ball) => ({
        ...ball,
        x: ball.x + 5
    }));
}