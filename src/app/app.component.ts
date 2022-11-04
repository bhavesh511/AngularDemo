import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'AngularDemo';
  data = 10;
  // num = 100;
  // getvalue()
  // {
  //   return "Data"
  // }
  updateValue() {
    this.data = Math.floor(Math.random() * 10)
  }

  // userDetails = [
  //   { name: 'john', email: 'john@gmail.com' },
  //   { name: 'roy', email: 'roy@gmail.com' },
  //   { name: 'eran', email: 'eran@gmail.com' },
  // ]

  Value = "x";
  updateData(item: string) {
    console.warn(item);
    this.Value = item;
  }
}
