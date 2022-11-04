import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { InsertExam } from '../model/insert-exam.model';
//import { GetExambyID } from '../model/insert-exam.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(public http: HttpClient) { }



  examData: InsertExam = new InsertExam();
  //examDatabyID : GetExambyID = new GetExambyID();

  GetExams() {
    return this.http.get('https://localhost:44302/api/Exam/GetExams');
  }

  addExam(): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };

    //console.log(data);
    return this.http.post('https://localhost:44302/api/Exam/InsertExam', this.examData, options);
  }

  // GetExambyID(): Observable<any> {
  //   let guid = new HttpParams().set()
  //   return this.http.get('https://localhost:44302/api/Exam/InsertExam',{params:guid})
  // };
}
