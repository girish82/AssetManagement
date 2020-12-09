import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetsService } from '../services/assets.service';

@Component({
  selector: 'app-assetedit',
  templateUrl: './assetedit.component.html',
  styleUrls: ['./assetedit.component.css']
})
export class AsseteditComponent implements OnInit {

  assetId: string;
  routeSubs: Subscription;
  assetData: any;
  constructor(private assetService: AssetsService,
              private route: ActivatedRoute,
              private router: Router) { }

  addEditMode = false;
  addEditCaption = 'Add Assets';
  ngOnInit() {
    this.routeSubs = this.route.params.subscribe
    ((res: any) => {
      this.assetId = res.id;
      if (this.assetId) {
        this.addEditMode = true;
        this.addEditCaption = 'Update Assets';
        this.assetService.getAssetsById(this.assetId)
        .subscribe(
          (data: any) => {
            this.assetData = data;
            console.log(this.assetData.assetExist.soloData);
          },
          (error) => console.log(error)
        );
      } else {
        this.assetId = null;
        this.addEditMode = false;
        this.addEditCaption = 'Add Assets';
      }
    },
    (error) => {
      console.log(error);
    });
    }

onCancel() {
  this.router.navigate(['/assets']);
}

onSubmit(data: NgForm) {
    if (!this.addEditMode) {
      this.assetService.addAssets(data.value)
      .subscribe((res) => {
        this.router.navigate(['/assets']);
      },
    (error) => console.log(error));
    } else {
      this.assetService.updateAssets(data.value, this.assetId)
      .subscribe((res) => {
        this.router.navigate(['/assets']);
      },
    (error) => console.log(error));
    }
  }

}
