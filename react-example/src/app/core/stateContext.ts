import { createContext, Dispatch } from 'react';
import type { GameState, ActionType } from './stateReducer';

export const StateContext = createContext<GameState|null>(null);
export const DispatchContext = createContext<Dispatch<ActionType> | null>(null);