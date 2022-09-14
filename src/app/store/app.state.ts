import { PostsState } from './../posts/state/posts.state';
import { CounterState } from './../counter/state/state.counter';
import {counterReducer} from '../counter/state/reducer.counter';
import { postsReducer } from '../posts/state/posts.reducer';
export interface AppState{
    counter: CounterState;
    posts:PostsState;
}

export const appReducer = {
    counter: counterReducer,
    post: postsReducer
}