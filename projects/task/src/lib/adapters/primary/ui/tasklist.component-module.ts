import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TasklistComponent],
  	providers: [],
  	exports: [TasklistComponent] })
export class TasklistComponentModule {
}
