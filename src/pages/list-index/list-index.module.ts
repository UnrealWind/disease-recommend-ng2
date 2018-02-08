import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListIndexPage } from './list-index';

@NgModule({
  declarations: [
    ListIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(ListIndexPage),
  ],
})
export class ListIndexPageModule {}
