import { Component } from '@angular/core';

import { PageIndexPage } from '../page-index/page-index'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PageIndexPage;
  tab2Root = '';
  tab3Root = '';
  tab4Root = '';
  tab5Root = '';

  constructor() {

  }
}
