import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <h2 class = "custom">
      inline style and inline template country component
    </h2>
  `,
  styles: [
    '.custom{color:blue}'
  ]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
