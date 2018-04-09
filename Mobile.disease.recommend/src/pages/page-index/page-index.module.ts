import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageIndexPage } from './page-index';

@NgModule({
  declarations: [
    PageIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(PageIndexPage),
  ],
})
export class PageIndexPageModule {}
