import { CounterState } from './state.counter';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState,  state => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, state => {
    return state.text;
});