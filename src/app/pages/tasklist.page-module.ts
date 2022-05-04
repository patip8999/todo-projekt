import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasklistPage } from './tasklist.page';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';

import { TaskListComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/task-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TasklistPage,
        }
      ]),
  FirebaseTaskServiceModule,

  TaskListComponentModule
],
  	declarations: [TasklistPage],
  	providers: [],
  	exports: [] })
export class TasklistPageModule {
}
