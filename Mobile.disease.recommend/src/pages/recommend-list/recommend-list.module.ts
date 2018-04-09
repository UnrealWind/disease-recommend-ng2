import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendListPage } from './recommend-list';

@NgModule({
  declarations: [
    RecommendListPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendListPage),
  ],
})
export class RecommendListPageModule {}
