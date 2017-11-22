import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
 jobTitle: String;
 jobPayroll: String;
 coreTechnology: String[];
 NoOfOpening: String;
 jobDescription: String;
 jobLocation: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobPayroll = 'Permanent';
    this.NoOfOpening = '1';
    this.jobLocation = 'Atlanta';
  }

  CreateJobClick(){
    var objUser = JSON.parse(localStorage.getItem('user'));
    const job = {
      jobTitle: this.jobTitle,
      jobDescription: this.jobDescription,
      coreTechnology: this.coreTechnology,
      jobPayroll: this.jobPayroll,
      jobLocation: this.jobLocation,
      postedByEmail: objUser.email,
      postedByName: objUser.name,
      datePosted: new Date().toLocaleDateString(),
      numberOfOpening: this.NoOfOpening,
      isActive: "1"
    }

    this.authService.CreateJob(job).subscribe(data => {
      if(data.success){
        this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
        this.ClearCtrl();
        //this.router.navigate(['createJob']);
      } else {
        this.ClearCtrl();
        this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        //this.router.navigate(['createJob']);
      }
    });
  }

  ClearCtrl(){
    this.jobTitle = "";
    this.jobPayroll = 'Permanent';
    this.coreTechnology =  null;
    this.NoOfOpening = '1';
    this.jobDescription = "";
    this.jobLocation =  'Atlanta';
  }

}
