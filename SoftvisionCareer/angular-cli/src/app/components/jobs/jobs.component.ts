import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs = [];
  public users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 }
  ];
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAllJob().subscribe( resulte => {
      this.jobs = resulte.jobs;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
