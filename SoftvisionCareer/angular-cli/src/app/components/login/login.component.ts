import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    alert(this.password);
    const user = {
      email: this.email,
      password: this.password
    }
    console.log(user);
    // Authenticate User
    this.authService.authenticateUser(user).subscribe(data => {
    console.log(data);
    if(data.success){
      this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-success', timeout: 3000 });
      //this.router.navigate(['/profile']);
      console.log('success');
    } else {
      //console.log('error');
      this.password = "test";
      this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      //this.router.navigate(['/login']);
    }
    });

  }

}
