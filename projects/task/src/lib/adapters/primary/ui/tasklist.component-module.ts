import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, RouterModule],
  	declarations: [TasklistComponent],
  	providers: [],
  	exports: [TasklistComponent] })
export class TasklistComponentModule {
}
