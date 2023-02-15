import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogNotificationComponent } from './log-notification.component';
import {LogNotificationRoutingModule} from "./log-notification-routing.module";
import {LogNotificationFilterModule} from "./log-notification-filter/log-notification-filter.module";
import {LogNotificationSmsTableModule} from "./log-notification-sms-table/log-notification-sms-table.module";



@NgModule({
  declarations: [
    LogNotificationComponent
  ],
  imports: [
    CommonModule,
    LogNotificationRoutingModule,
    LogNotificationFilterModule,
    LogNotificationSmsTableModule
  ]
})
export class LogNotificationModule { }
