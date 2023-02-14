import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpRoutingModule } from './otp-routing.module';
import { OtpComponent } from './otp.component';
import {OtpFilterComponent} from "./otp-filter/otp-filter.component";
import {ApBadgeModule, ApSelectModule} from "astrapay-starter";
import {OtpTableModule} from "./otp-table/otp-table.module";


@NgModule({
    declarations: [
        OtpComponent,
        OtpFilterComponent
    ],
  imports: [
    CommonModule,
    OtpRoutingModule,
    ApSelectModule,
    ApBadgeModule,
    OtpTableModule
  ]
})
export class OtpModule { }
