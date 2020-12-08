import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../services/assets.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private assetsService: AssetsService) { }

  userList: any;
  errorMessage: string;

  ngOnInit() {
    this.assetsService.getAllUsers().subscribe
    ((res: any) => {
      this.userList = res.users;
      console.log(res.users);
    },
    (error) => this.errorMessage = error.error.message);
  }

}
