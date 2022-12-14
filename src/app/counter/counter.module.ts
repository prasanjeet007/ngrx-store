import { COUNTER_STATE_NAME } from './state/selector.counter';
import { StoreModule } from '@ngrx/store';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { counterReducer } from './state/reducer.counter';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
   CounterComponent,
   CounterButtonsComponent,
   CounterInputComponent,
   CounterOutputComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)],
})
export class CounterModule {}

