import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypicalRecordPage } from './typical-record';

@NgModule({
  declarations: [
    TypicalRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(TypicalRecordPage),
  ],
})
export class TypicalRecordPageModule {}
