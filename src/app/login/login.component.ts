import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetsService } from '../services/assets.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ErrorMessage: string = null;
  signIn = true;
  loginLabel = 'Login';
  loginSubcription: Subscription;
  signupLabel = 'Sign Up';
  constructor(private router: Router,
              private assetsService: AssetsService,
              private http: HttpClient) { }

  ngOnInit() {
    window.localStorage.removeItem('assetUser');
    this.assetsService.loggedUser.next('login');
  }

  onLogin(data: NgForm) {
    if (this.signIn) {
      this.assetsService.loginUser(data.value)
      .subscribe((res: any) => {
        this.assetsService.token = res.user.token;
        this.router.navigate(['/assets']);
        this.saveToken(res.user);
      },
      (error) => {
        this.ErrorMessage = error.error.message;
      });
    } else {
       this.assetsService.registerUser(data.value)
      .subscribe((res: any) => {
        this.assetsService.token = res.user.token;
        this.saveToken(res.user);
        this.router.navigate(['/assets']);
      },
      (error) => {
        this.ErrorMessage = error.error.message;
      });
    }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  toggle() {
    this.signIn = !this.signIn;
    this.loginLabel = this.signIn === true ? 'Login' : 'Register';
    this.signupLabel = this.signIn === true ? 'Sign Up' : 'Login';
  }

  saveToken(user: any) {
    window.localStorage.removeItem('assetUser');
    window.localStorage.setItem('assetUser', JSON.stringify(user));
    this.assetsService.loggedUser.next(user.email + ' (logout)');
  }

}
