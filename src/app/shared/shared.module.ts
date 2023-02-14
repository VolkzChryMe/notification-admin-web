import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ],
    imports: [
      RouterModule,
        CommonModule
    ]
})
export class SharedModule { }
