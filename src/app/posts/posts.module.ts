import { PostEditComponent } from './post-edit/post-edit.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      {
        path: 'edit/:id',
        component: PostEditComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [PostListComponent, PostEditComponent, AddPostComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class PostsModule {}

