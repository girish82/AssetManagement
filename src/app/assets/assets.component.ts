import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetsService } from '../services/assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit, OnDestroy {

  assets: any;
  assetSubs: Subscription;
  deleteSubs: Subscription;
  constructor(private assetService: AssetsService,
              private router: Router) { }

  ngOnInit() {
    this.fetchAssets();
  }

  fetchAssets() {
    this.assetSubs = this.assetService.getAssets()
    .subscribe((res: any) => {
      this.assets = res.assets;
    },
    (error) => console.log(error));

  }

  goEdit(id: string) {
    this.router.navigate(['/assets/edit/', id]);
  }

  goDelete(id: string) {
    const dele = window.confirm('Do you want to delete ?');
    this.deleteSubs = this.assetService.DeleteAssets(id)
    .subscribe((res) =>
    {
      this.fetchAssets();
    },
    (error) => console.log(error));
  }

  goAdd() {
    this.router.navigate(['/assets/add']);
  }

  ngOnDestroy() {
  }
}
