import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { switchMap } from 'rxjs/operators';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Component({ selector: 'lib-tasklist', templateUrl: './tasklist.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TasklistComponent {
  list$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  readonly task: FormGroup = new FormGroup({task: new FormControl()});
  task$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll().pipe(switchMap(data => this._getsAllTaskDto.getAll()));

  constructor(@Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort, @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort, @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort) {
  }

  onTaskTasked(): void {
    this._addsTaskDto.add({
      task: this.task.get('task-list')?.value
    });
    this.task.reset();
  }
}