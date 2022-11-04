import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  template: `
    <h2 class="custom">
      inline template student component
    </h2>
  `,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
