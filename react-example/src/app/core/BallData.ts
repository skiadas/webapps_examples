import { generateColor, randomAngle, randomInside, randomInt } from "./utils";

const BALL_RADIUS = 10;

export type BallData = {
    readonly x: number;
    readonly y: number;
    readonly direction: number;
    readonly speed: number;
    readonly color: { bgColor: string, color: string };
    readonly points: number;
};

export type AllBallsType = ReadonlyArray<BallData>;


export function makeBall(dimensions: [number, number]): BallData {
    const [width, height] = dimensions;
    return {
        x: randomInside(width, 2 * BALL_RADIUS),
        y: randomInside(height, 2 * BALL_RADIUS),
        direction: randomAngle(),
        speed: 5,
        color: generateColor(),
        points: randomInt(1, 20)
    }
}

export function moveBalls(balls: AllBallsType, dimensions: [number, number]): AllBallsType {
    return balls.map((b => moveBall(b, dimensions)));
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
function moveBall(ball: BallData, dimensions: [number, number]): BallData {
    const [width, height] = dimensions;
    const { direction, x, y, speed } = ball;
    let newDirection = direction;
    const newX = x + speed * Math.cos(direction);
    const newY = y + speed * Math.sin(direction);
    if (newX <= 0 || newX + 2 * BALL_RADIUS >= width) { newDirection = Math.PI - direction; }
    if (newY <= 0 || newY + 2 * BALL_RADIUS >= height) { newDirection = -direction; }

    return {
        ...ball,
        x: newX,
        y: newY,
        direction: newDirection
    };
}

export function adjustBalls(balls: AllBallsType, dimensions: [number, number]): AllBallsType {
    return balls.map(b => adjustBall(b, dimensions));
}

export function adjustBall(ball: BallData, dimensions: [number, number]): BallData {
    const [width, height] = dimensions;
    return {
        ...ball,
        x: ball.x + BALL_RADIUS >= width ? width - 2 * BALL_RADIUS : ball.x,
        y: ball.y + BALL_RADIUS >= height ? height - 2 * BALL_RADIUS : ball.y
    }
}