import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogNotificationEmailTableComponent } from './log-notification-email-table.component';
import {ApTableModule} from "astrapay-starter";



@NgModule({
  declarations: [
    LogNotificationEmailTableComponent
  ],
    imports: [
        CommonModule,
        ApTableModule
    ]
})
export class LogNotificationEmailTableModule { }
