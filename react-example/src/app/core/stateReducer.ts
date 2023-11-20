import type { AllBallsType } from '../core/BallData';
import { reassignColors, makeBall, moveBalls } from '../core/BallData';

export type ActionType =
    { type: 'random-colors' }
    | { type: 'random-speeds' }
    | { type: 'more-balls' }
    | { type: 'less-balls' }
    | { type: 'advance' }
    | { type: 'add-points', points: number };

export type GameState = {
    readonly points: number;
    readonly balls: AllBallsType;
}

export function reduceState(state: GameState, action: ActionType): GameState {
    const { points, balls } = state;
    switch (action.type) {
        case 'random-colors':
            return { points, balls: reassignColors(balls) };
        case 'random-speeds':
            return { points, balls }; // TODO: Fix me
        case 'more-balls':
            return { points, balls: [...balls, makeBall()] };
        case 'less-balls':
            return { points, balls: balls.slice(0, -1) };
        case 'advance':
            return { points, balls: moveBalls(balls) };
        case 'add-points':
            return { points: points + action.points, balls };
        default: throw new Error("Shouldn't happen");
    }
}
