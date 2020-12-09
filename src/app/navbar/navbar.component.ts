import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AssetsService } from '../services/assets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logLabel: string ;
  assetDisable = true;
  constructor(private assetService: AssetsService) { }

  ngOnInit() {
    this.setLabel();
  }

  setLabel() {
    this.assetService.loggedUser.subscribe((res) => {
      this.logLabel = res;
    });
  }

}
