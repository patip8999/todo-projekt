import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasklistPage } from './tasklist.page';
import { TasklistComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/tasklist.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';


@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TasklistPage,
        }
      ]),
  TasklistComponentModule,
  FirebaseTaskServiceModule,

],
  	declarations: [TasklistPage],
  	providers: [],
  	exports: [] })
export class TasklistPageModule {
}
