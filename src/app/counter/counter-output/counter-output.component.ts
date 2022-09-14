import { AppState } from './../../store/app.state';
import { getCounter } from './../state/selector.counter';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number;
  counterSubscription: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  this.counterSubscription =  this.store.select(getCounter).subscribe((data) => {
    console.log('counter');
      this.counter = data;
    })
  }
  
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
