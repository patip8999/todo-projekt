import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskaddComponent } from './taskadd.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TaskaddComponent],
  	providers: [],
  	exports: [TaskaddComponent] })
export class TaskaddComponentModule {
}
