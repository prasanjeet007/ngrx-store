import { createAction, props } from "@ngrx/store";

export const increament = createAction('increament');
export const decreament = createAction('decreament');
export const reset = createAction('reset ');
export const input = createAction('input', props<{value:number}>());