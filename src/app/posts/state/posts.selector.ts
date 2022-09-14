import { PostsState } from './posts.state';

import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPostState = createFeatureSelector<PostsState>('post');

export const getPosts = createSelector(getPostState, state => {
    return state.posts;
});

export const getPostById = createSelector(getPostState, (state, props) => {
    return state.posts.find((post) => post.id === props.id);
});