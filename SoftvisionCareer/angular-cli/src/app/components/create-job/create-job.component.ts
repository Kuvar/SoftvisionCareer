import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
 jobTitle: String;
 jobPayroll: String;
 multipleSelect: String[];
 NoFoOpening: String;
 jobDescription: String;
  constructor() { }

  ngOnInit() {
  }

}
