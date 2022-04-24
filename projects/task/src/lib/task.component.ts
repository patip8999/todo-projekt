import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-task',
  template: `
    <p>
      task works!
    </p>
  `,
  styles: [
  ]
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
