import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'otp-filter',
  templateUrl: './otp-filter.component.html',
  // styleUrls: ['./otp-filter.component.css']
})
export class OtpFilterComponent implements OnInit {
  value: String[] = []

  constructor() { }

  ngOnInit(): void {
    this.value.push("SMS", "Email", "Push Notification")
  }

}
