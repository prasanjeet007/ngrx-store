import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { CounterComponent } from './counter/counter/counter.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';


const routes: Routes = [
    {path:'', component:HomeComponent},
    {
        path: 'counter',
        loadChildren: () =>
          import('./counter/counter.module').then((m) => m.CounterModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsModule),
      },
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}