import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanIntroducePage } from './plan-introduce';

@NgModule({
  declarations: [
    PlanIntroducePage,
  ],
  imports: [
    IonicPageModule.forChild(PlanIntroducePage),
  ],
})
export class PlanIntroducePageModule {}
