import { increament, decreament, reset, input } from './action.counter';
import { intialState } from './state.counter';
import { createReducer, on } from "@ngrx/store";

const _counterReducer = createReducer(intialState, on(increament, (state) => {
    return {
        ...state,
        counter: state.counter+1
    }
}),
on(decreament, (state) => {
    return {
        ...state,
        counter: state.counter > 0 ? state.counter-1:0
    }
}),
on(reset, (state) => {
    return {
        ...state,
        counter:0
    }
}),
on(input, (state, action) => {
    return {
        ...state,
        counter:state.counter+action.value
    }
})
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}