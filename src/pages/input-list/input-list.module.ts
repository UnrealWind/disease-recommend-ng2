import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputListPage } from './input-list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule,MatChipsModule,MatSelectModule,MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    InputListPage
  ],
  imports: [
    IonicPageModule.forChild(InputListPage),
    BrowserAnimationsModule,
    MatMenuModule,
    MatChipsModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
})
export class InputListPageModule {}
