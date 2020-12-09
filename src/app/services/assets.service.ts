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

  addAssets(addAsset: any) {
    return this.http.post('http://localhost:3000/assets',
    addAsset);
    // .subscribe((res) => console.log(res),
    // (error) => console.log(error));
  }

  updateAssets(updateAsset: any, id: any) {
    return this.http.put('http://localhost:3000/assets/' + id,
    updateAsset);
    // .subscribe((res) => console.log(res),
    // (error) => console.log(error));
  }

  DeleteAssets(id: string) {
    return this.http.delete('http://localhost:3000/assets/' + id);
  }

  getAssets() {
    return this.http.get('http://localhost:3000/assets');
    // .subscribe((res) => console.log(res),
    // (error) => console.log(error));
  }

  getAssetsById(id: string) {
    return this.http.get('http://localhost:3000/assets/' + id);
    // .subscribe((res) => console.log(res),
    // (error) => console.log(error));
  }
}
