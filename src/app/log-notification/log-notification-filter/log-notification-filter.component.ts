import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogNotification} from "../shared/log-notification.model";
import {FormBuilder, FormGroup} from "@angular/forms";

class OptionFilter {
}

@Component({
  selector: 'log-notification-filter',
  templateUrl: './log-notification-filter.component.html',
  styleUrls: ['./log-notification-filter.component.css']
})
export class LogNotificationFilterComponent implements OnInit {

  @Output() filter: EventEmitter<LogNotification> = new EventEmitter<LogNotification>()
  @Output() clearFilter: EventEmitter<LogNotification> = new EventEmitter<LogNotification>()
  @Input() logNotification: LogNotification

  types: OptionFilter[] = []
  statuses: OptionFilter[] = []
  value: {value: string, selectLabel: string, label: string}[] = []
  filterForm : FormGroup
  tempSelect : String = "sms"

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.value.push(
      {value: "sms", selectLabel: "SMS", label: "Cari nomor HP"},
      {value: "email", selectLabel: "Email", label: "Cari email"},
      {value: "notification", selectLabel: "Push Notification", label: "Cari notification ID"}
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
  }

  onFilter(): void {
    let filter = Object.assign({}, this.filterForm.value)
    this.filter.emit(filter)
  }

}
