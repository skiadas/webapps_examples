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
    return balls.map(moveBall);
}

export function reassignColors(balls: AllBallsType): AllBallsType {
    return balls.map(reassignColor);
}

function reassignColor(ball: BallData): BallData {
    return {
        ...ball,
        color: generateColor()
    };
}
function moveBall(ball: BallData): BallData {
    return {
        ...ball,
        x: ball.x + ball.speed * Math.cos(ball.direction),
        y: ball.y + ball.speed * Math.sin(ball.direction)
    };
}