import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { HomePagePageModule } from './home-page.page-module';
import { AddTaskPageModule } from './add-task.page-module';
import { RouterModule, Routes } from '@angular/router';
@Component({ selector: 'app-home-page-page', templateUrl: './home-page.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class HomePagePage {
}


const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePagePageModule
      },
  { 
        path: 'AddTask', 
        loadChildren: () => AddTaskPageModule
      }
];
