import {Component, OnInit, ViewChild} from '@angular/core';
import {LogNotificationSmsTableComponent} from "./log-notification-sms-table/log-notification-sms-table.component";
import {
  LogNotificationEmailTableComponent
} from "./log-notification-email-table/log-notification-email-table.component";
import {LogNotification} from "./shared/log-notification.model";
import {Filter, Pagination, PaginationDataSourceService} from "astrapay-starter";

@Component({
  selector: 'app-log-notification',
  templateUrl: './log-notification.component.html',
  styleUrls: ['./log-notification.component.css']
})
export class LogNotificationComponent implements OnInit {

  @ViewChild(LogNotificationSmsTableComponent) smsTable: LogNotificationSmsTableComponent

  @ViewChild(LogNotificationEmailTableComponent) emailTable: LogNotificationSmsTableComponent
  logNotification:LogNotification
  dataSource: PaginationDataSourceService<LogNotification>
  pagination:Pagination = new Pagination()
  filters: Filter[]

  ngOnInit(): void {
    this.logNotification = {
      phoneNumber: ''
    }
  }

  onFilter(logNotification:LogNotification) {
    this.smsTable.onFilter(logNotification)
  }

  constructor() { }

}
