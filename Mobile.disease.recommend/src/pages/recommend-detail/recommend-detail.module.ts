import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendDetailPage } from './recommend-detail';

@NgModule({
  declarations: [
    RecommendDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendDetailPage),
  ],
})
export class RecommendDetailPageModule {}
