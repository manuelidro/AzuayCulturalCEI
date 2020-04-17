import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from './../Modelo/task';
import { AuthService} from '../Services/auth.service';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
 
    constructor(private authService: AuthService, public router: Router) {}
    private user: User = { 
        email: "",
       password: ""
      };

       ngOnInit(){}

        onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
 
      onLogin() {
        return this.authService
        .LoginUser(this.user.email, this.user.password)
        .subscribe(
          data => {
            this.authService.setUser(data);
            let token = data.idLogin;
            this.authService.setToken(token);
          },
          error => console.log(error)
        );
      }
    
}