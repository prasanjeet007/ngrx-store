import { AppState } from './../../store/app.state';
import { Post } from './../../models/posts.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('',[Validators.required, Validators.minLength(10)])
    })
  }
  onAddPost(formValue:any) {
   if (formValue.invalid) {
    return;
   }
   const post:Post = {
    title: formValue.value.title,
    description: formValue.value.description
   };
   this.store.dispatch(addPost({post}));
  }

}
