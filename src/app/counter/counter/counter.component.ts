import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onIncreament() {
    this.counter++;
  }

  onDecreament() {
    if (this.counter>0) {
      this.counter--;
    }
  }

  onReset() {
     this.counter = 0; 
  }

}
