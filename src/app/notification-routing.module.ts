import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./home/home.component";
import {OtpComponent} from "./otp/otp.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ],
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then((m)=>m.OtpModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
