import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  //public formData: FormGroup;

  
  constructor(public examDataService: DataServiceService) {
  }

  ngOnInit(): void {
    //this.init();
  }

  //constructor(private formbuilder: FormBuilder, private examService: DataServiceService) { }

  addExamData(formData: NgForm) {
    //console.log(addExam);
    this.examDataService.addExam().subscribe((result) => {
      alert('Insert successfully');
    })
  }
  

  // public addExamData(): void {
  //   this.examService.addExam(this.formData.value).subscribe(result => {
  //     alert('Insert Successfully')
  //   });
  // }

  // private init(): void {
  //   this.formData = this.formbuilder.group({
  //     ExamName: [],
  //     PassMark: [],
  //     TotalMark: [],
  //     totalQuestions: []
  //   })
}



