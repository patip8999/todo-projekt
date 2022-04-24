import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtaskComponent } from './addtask.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AddtaskComponent],
  	providers: [],
  	exports: [AddtaskComponent] })
export class AddtaskComponentModule {
}
