import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseTaskService implements AddsTaskDtoPort, GetsAllTaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(task: Partial<TaskDTO>): void {
    this._client.collection('task-list').add(task);
  }

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client.collection<TaskDTO>('task-list').valueChanges(({idField: 'id'})).pipe(map((data: TaskDTO[]) => filterByCriterion(data, criterion)));
  }
}