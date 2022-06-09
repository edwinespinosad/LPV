import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public user: User;
  public identity: string | null;
  constructor(public loginService: LoginService, private router: Router) {
    this.user = new User("", "", "", "");
    this.identity = null;
  }

  ngOnInit(): void {
    this.identity = localStorage.getItem('identity');

  }

  signOut(email: string) {
    console.log("Sign out");
    localStorage.removeItem('identity');
    this.router.navigate(['/home']);
  }

  onSubmit(form: any, email: string, password: string) {
    console.log("Submit");
    this.loginService.getUser(email).subscribe(
      response => {
        if (response === null) {
          const alert = document.createElement('div');
          alert.classList.add('alert');
          alert.classList.add('alert-danger');
          alert.classList.add('alert-dismissible')
          alert.classList.add('fade');
          alert.classList.add('show');
          alert.innerHTML = `
          <strong>Your email isn't registered yet!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          `;
          document.getElementsByClassName('form')[0].prepend(alert);
        } else {
          console.log(response);
          if (response['email'] === email && response['password'] === password) {
            localStorage.setItem('identity', JSON.stringify(response['email']));
            this.router.navigate(['/home']);
          } else {
            console.log("Error cuenta no encontrado");
            const alert = document.createElement('div');
            alert.classList.add('alert');
            alert.classList.add('alert-danger');
            alert.classList.add('alert-dismissible')
            alert.classList.add('fade');
            alert.classList.add('show');
            alert.innerHTML = `
                      <strong>Your email or password is invalid!</strong>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      `;
            document.getElementsByClassName('form')[0].prepend(alert);
          }
        }
      }, error => {
        console.log(error);
      });

  }

}
