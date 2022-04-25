import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskaddComponent } from './taskadd.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [TaskaddComponent],
  	providers: [],
  	exports: [TaskaddComponent] })
export class TaskaddComponentModule {
}
