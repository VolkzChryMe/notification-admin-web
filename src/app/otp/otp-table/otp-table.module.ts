import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpTableComponent } from './otp-table.component';
import {ApBadgeModule, ApTableModule} from "astrapay-starter";



@NgModule({
  declarations: [
    OtpTableComponent
  ],
  exports: [
    OtpTableComponent
  ],
  imports: [
    CommonModule,
    ApTableModule,
    ApBadgeModule
  ]
})
export class OtpTableModule { }
