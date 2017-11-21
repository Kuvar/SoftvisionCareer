import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
name:String;
  constructor() { }

  ngOnInit() {
    var objUser = JSON.parse(localStorage.getItem('user'));
    this.name = objUser.name;
  }

}
