import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogNotificationFilterComponent } from './log-notification-filter.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        LogNotificationFilterComponent
    ],
    exports: [
        LogNotificationFilterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class LogNotificationFilterModule { }
