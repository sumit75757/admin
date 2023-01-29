import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  id: any;
  constructor(private fb: FormBuilder) { }

coupon:FormGroup;

  ngOnInit() {

    this.coupon=this.fb.group({
      sellername: new FormControl("", [Validators.required]),
      couponname: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
     shopname: new FormControl("", [Validators.required]),


    } )
  }
  clearForm() {

    this.id = null
    console.log(this.id);
    this.coupon.reset()
   
  }
  submit() {
   
    }

}
