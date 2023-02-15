import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'otp-filter',
  templateUrl: './otp-filter.component.html',
  // styleUrls: ['./otp-filter.component.css']
})
export class OtpFilterComponent implements OnInit {
  value: {value: string, selectLabel: string, label: string}[] = []
  filterForm : FormGroup
  tempSelect : String = "sms"

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.value.push(
      {value: "sms", selectLabel: "sms", label: "Cari nomor HP"},
      {value: "email", selectLabel: "email", label: "Cari email"},
      {value: "notification", selectLabel: "notification", label: "Cari notification ID"}
    )
    this.filterForm = this.formBuilder.group({
      sms: [''],
      email: [''],
      notification: ['']
    })
  }

  onChange(event: string) {
    this.filterForm.patchValue({
      sms: '',
      email: '',
      notification: ''
    })
    this.tempSelect = event
  }

  onResetFilter() {
    this.filterForm.setValue({
      sms: '',
      email: '',
      notification: '',
    })
    // this.couponCampaign = this.filterForm.value
  }

}
