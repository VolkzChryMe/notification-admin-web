import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'otp-table',
  templateUrl: './otp-table.component.html',
  // styleUrls: ['./otp-table.component.css']
})
export class OtpTableComponent implements OnInit {

  // @Input() transaction: Transaction = {
  //   rangeCreatedAt: {
  //     startDate: new Date(),
  //     endDate: new Date()
  //   },
  //   userIds: '',
  // }

  displayedColumns: string[] = [
    'createdAt',
    'message',
    'phoneNumber',
    'status'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
