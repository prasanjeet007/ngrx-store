import { Post } from "src/app/models/posts.model";

export interface PostsState  {
    posts: Post[];
}
export const intialState: PostsState = {
    posts: [
        {id:'1', title:'Smaple Title 1', description:'Sample Description 1'},
        {id:'2', title:'Sample title 2', description:'Sample Description 2'}
    ]
}