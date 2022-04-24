import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';

import { AddtaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/addtask.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddTaskPage,
        }
      ]),
  AddtaskComponentModule
],
  	declarations: [AddTaskPage],
  	providers: [],
  	exports: [] })
export class AddTaskPageModule {
}
