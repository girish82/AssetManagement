import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  token: string;
  LoggerMessage: string;

  constructor( private assetService: AssetsService, private http: HttpClient ) {}

  getAllUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  registerUser(postData: any) {
    return this.http.post('http://localhost:3000/users',
    postData);
  }

  loginUser(loginData: any) {
    return this.http.post('http://localhost:3000/users/login', loginData);
  }
}
