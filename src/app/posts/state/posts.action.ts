import { Post } from './../../models/posts.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
export const ADD_POST_ACTION = '[post page] add post';

export const addPost = createAction(ADD_POST_ACTION, props<{post:Post}>()); 