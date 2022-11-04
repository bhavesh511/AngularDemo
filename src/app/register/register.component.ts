import { animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  title = "Event data register component";
  ngOnInit(): void {
  }
  getEvent(val: any) {
    console.warn(val);
  }

  displayValue = '';
  getValue(val: any) {
    this.displayValue = val;
  }

  number = 0;
  counter(type: any) {
    type === 'add' ? this.number++ : this.number--;
  }

  value = "Data";

  disable = true;

  show = true;

  color = "red";

  // SwitchColor = "green";

  ForLoopUser = ['T1', 'T2'];

  ForLoopUserDetails = [
    { name: "T1", user_email: "t1@gmail.com", user_mobile: "8888" },
    { name: "T2", user_email: "t2@gmail.com", user_mobile: "4444" },
    { name: "T3", user_email: "t3@gmail.com", user_mobile: "5555" },
  ];

  Employees = [
    { name: "WdqBvFe", salary: "797", socialAccount: ['facebook', 'youtube', 'instagram'] },
    { name: "Menaka6", salary: "245", socialAccount: ['facebook', 'youtube', 'instagram'] },
    { name: "2381456", salary: "123", socialAccount: ['facebook', 'youtube', 'instagram'] },
    { name: "6132456", salary: "123", socialAccount: ['facebook', 'youtube', 'instagram'] },
    { name: "2022456", salary: "123", socialAccount: ['facebook', 'youtube', 'instagram'] },
  ];

  style = "Style Binding";

  bgColor = 'green';

  updateColor() {
    this.color = "blue"
    this.bgColor = "red"
  }

  list: any[] = [];
  AddTask(item: any) {
    //console.warn(item);
    this.list.push({ id: this.list.length, name: item })
  }

  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter(item => item !== id)
  }

  @Input() item = 0;

  //@Input() items: { name: string, email: string } = { name: '', email: '' };
  name: any;

  getVal(item: HTMLInputElement) {
    console.warn(item);
  }

  nameVal = 'Angular';
  today = Date();
  user = {
    name:'anil',
    age:28
  }

}
