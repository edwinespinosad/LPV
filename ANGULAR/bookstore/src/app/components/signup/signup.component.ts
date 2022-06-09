import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginService]
})
export class SignupComponent implements OnInit {
  public user: User;

  constructor(public router: Router, public loginService: LoginService) {
    this.user = new User("", "", "", "");

  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log("Submit");
    this.loginService.createUser(this.user).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      }
    );

  }

}
