import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendBasicPage } from './recommend-basic';

@NgModule({
  declarations: [
    RecommendBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendBasicPage),
  ],
})
export class RecommendBasicPageModule {}
