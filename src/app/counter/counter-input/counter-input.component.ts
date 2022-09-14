import { AppState } from './../../store/app.state';
import { getChannelName } from './../state/selector.counter';
import { input } from './../state/action.counter';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  counterValue: number;
  name: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((data) => {
      console.log('channelname');
      this.name = data;
    })
  }
  inputValue() {
    this.store.dispatch(input({value:this.counterValue}));
    this.counterValue = null;
  }

}
