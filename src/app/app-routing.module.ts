import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePageModule } from './pages/home-page.page-module';
import { AddTaskPageModule } from './pages/add-task.page-module';
import { TasklistPageModule } from './pages/tasklist.page-module';

const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePagePageModule
      },
  { 
        path: 'AddTask', 
        loadChildren: () => AddTaskPageModule
      },
  { 
        path: 'tasklist', 
        loadChildren: () => TasklistPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePagePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
