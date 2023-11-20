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
            return { ...state, balls: reassignColors(balls) };
        case 'random-speeds':
            return { ...state }; // TODO: Fix me
        case 'more-balls':
            return { ...state, balls: [...balls, makeBall()] };
        case 'less-balls':
            return { ...state, balls: balls.slice(0, -1) };
        case 'advance':
            return { ...state, balls: moveBalls(balls) };
        case 'add-points':
            return { ...state, points: points + action.points };
        default: throw new Error("Shouldn't happen");
    }
}
