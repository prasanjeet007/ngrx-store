import { PostsState } from './posts.state';

import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPostState = createFeatureSelector<PostsState>('post');

export const getPosts = createSelector(getPostState,  state => {
    return state.posts;
});