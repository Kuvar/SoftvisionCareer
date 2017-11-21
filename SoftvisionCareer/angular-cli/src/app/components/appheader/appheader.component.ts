import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  name:String;
  constructor(
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
     var objUser = JSON.parse(localStorage.getItem('user'));
     this.name = objUser.name;
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-seccess', timeout: 3000 });
    this.router.navigate(['/login']);
    return false;
  }

}
