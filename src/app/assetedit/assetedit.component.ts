import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assetedit',
  templateUrl: './assetedit.component.html',
  styleUrls: ['./assetedit.component.css']
})
export class AsseteditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCancel(){
    console.log('cancel');
  }

  onSubmit(data: NgForm) {
    console.log(data.value);
  }

}
