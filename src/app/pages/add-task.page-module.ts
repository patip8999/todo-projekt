import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';


import { TaskaddComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/taskadd.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';
import { TasklistComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/tasklist.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddTaskPage,
        }
      ]),
  
  TaskaddComponentModule,
  FirebaseTaskServiceModule,
  TasklistComponentModule
],
  	declarations: [AddTaskPage],
  	providers: [],
  	exports: [] })
export class AddTaskPageModule {
}
