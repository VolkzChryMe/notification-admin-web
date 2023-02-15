import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogNotificationSmsTableComponent } from './log-notification-sms-table.component';
import {ApTableModule} from "astrapay-starter";



@NgModule({
    declarations: [
        LogNotificationSmsTableComponent
    ],
    exports: [
        LogNotificationSmsTableComponent
    ],
    imports: [
        CommonModule,
        ApTableModule
    ]
})
export class LogNotificationSmsTableModule { }
