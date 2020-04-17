import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { User } from './../Modelo/task';
import {AuthService} from './../Services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private authService: AuthService, public router: Router, private location: Location) {}

    private user: User = {
        name: "",
        email: "",
        password: ""
      };
      ngOnInit() { }

      onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    


  onRegister(): void {
    this.authService.registerUser(this.user.name,this.user.email,this.user.password)
    .subscribe(user => {
     this.authService.setUser(user);
     let token = user.idPersona;
     this.authService.setToken(token);
    });
  }
}

      /*

      public isError = false;
      public msgError = '';
      ngOnInit() { }
    
      onRegister(form: NgForm): void {
        if (form.valid) {
          this.authService
            .registerUser(this.user.name, this.user.email, this.user.password)
            .subscribe(user => {
              this.authService.setUser(user);
              const token = user.idPersona;
              this.authService.setToken(token);
              location.reload();
            },
            res => {
              this.msgError = res.error.error.details.messages.email;
              this.onIsError();
            });
        } else {
          this.onIsError();
        }
    
      }
    
      onIsError(): void {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 4000);
      }
    }
    */ 
   