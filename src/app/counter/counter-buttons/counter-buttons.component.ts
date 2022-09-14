import { AppState } from './../../store/app.state';
import { decreament, reset } from './../state/action.counter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increament } from '../state/action.counter';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  onDecreament() {
    this.store.dispatch(decreament());
  }
  onIncreament()
  {
    this.store.dispatch(increament());
  }
  onReset() {
    this.store.dispatch(reset());
  }

}
