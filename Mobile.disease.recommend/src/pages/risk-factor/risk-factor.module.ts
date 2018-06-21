import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskFactorPage } from './risk-factor';

@NgModule({
  declarations: [
    RiskFactorPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskFactorPage),
  ],
})
export class RiskFactorPageModule {}
