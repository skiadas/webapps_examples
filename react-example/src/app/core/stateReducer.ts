import type { AllBallsType, BallData } from '../core/BallData';
import { reassignColors, makeBall, moveBalls, adjustBalls } from '../core/BallData';


export type ActionType =
    { type: 'random-colors' }
    | { type: 'random-speeds' }
    | { type: 'more-balls' }
    | { type: 'less-balls' }
    | { type: 'advance' }
    | { type: 'set-dimensions', dimensions: [number, number] }
    | { type: 'add-points', points: number };

export type GameState = {
    readonly points: number;
    readonly balls: AllBallsType;
    readonly dimensions: [number, number];
}

const dimensions: [number, number] = [800, 600];
export const initialState : GameState = {
    points: 0,
    dimensions,
    balls: [makeBall(dimensions), makeBall(dimensions)]
};

export function reduceState(state: GameState, action: ActionType): GameState {
    const { points, balls, dimensions } = state;
    switch (action.type) {
        case 'random-colors':
            return { ...state, balls: reassignColors(balls) };
        case 'random-speeds':
            return { ...state }; // TODO: Fix me
        case 'more-balls':
            return { ...state, balls: [...balls, makeBall(dimensions)] };
        case 'less-balls':
            return { ...state, balls: balls.slice(0, -1) };
        case 'advance':
            return { ...state, balls: moveBalls(balls, dimensions) };
        case 'add-points':
            return { ...state, points: points + action.points };
        case 'set-dimensions':
            return { ...state, dimensions: [...action.dimensions], balls: adjustBalls(balls, dimensions) }
        default: 
            const _cantHappen : never = action;
            return { ...state };
    }
}
