import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';

@Component({ selector: 'lib-addtask', templateUrl: './addtask.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddtaskComponent {
  task$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(@Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort) {
  }
}
