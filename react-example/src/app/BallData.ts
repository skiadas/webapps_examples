import { generateColor, randomAngle, randomInside, randomInt } from "./utils";

export type BallData = {
    readonly x: number;
    readonly y: number;
    readonly direction: number;
    readonly speed: number;
    readonly color: { bgColor: string, color: string };
    readonly points: number;
};

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