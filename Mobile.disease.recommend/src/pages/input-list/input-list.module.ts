import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputListPage } from './input-list';

@NgModule({
  declarations: [
    InputListPage,
  ],
  imports: [
    IonicPageModule.forChild(InputListPage),
  ],
})
export class InputListPageModule {}
