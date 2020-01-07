import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'newTabs.html'
})
export class NewTabsPage {

  //tab1Root = HomePage;
  tab2Root = AboutPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
