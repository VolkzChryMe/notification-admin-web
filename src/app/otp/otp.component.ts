import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  // styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // onFilter() {
  //   if(...sms) {
  //     this.hidden = false
  //     smstable.onfilter;
  //   }
  //   else {
  //
  //   }
  // }

}
