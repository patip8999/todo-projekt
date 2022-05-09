import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Component({ selector: 'lib-taskadd', templateUrl: './taskadd.component.html', 
encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TaskaddComponent {
  readonly taskList: 
  FormGroup = new FormGroup
  ({task: new FormControl()});
  taskList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(@Inject(ADDS_TASK_DTO) 
  private _addsTaskDto: AddsTaskDtoPort, @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort) {
  }

  onTaskListSubmited(taskList: FormGroup): void {
    if (taskList.invalid){
      return;
    }
    this._addsTaskDto.add({
      task: taskList.get('task')?.value,
      done: false,
      created: Date.now()
    });
    this.taskList.reset();
  }
  onclear() {
    
    this.taskList.reset();
    
  }
}
