import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  users: any;
  constructor(private examData: DataServiceService) {
    examData.GetExams().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });

  }

  ngOnInit(): void {
  }

  // getData(data: NgForm) {
  //   console.warn(data);
  // }

}
