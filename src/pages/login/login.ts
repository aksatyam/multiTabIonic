import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { NewTabsPage } from '../newTabs/newTabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  isNewTab: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  validateUser() {
    let rootPage;
    if (this.isNewTab) {
      rootPage = NewTabsPage;
    } else {
      rootPage = TabsPage;
    }
    this.navCtrl.setRoot(rootPage);
  }

}
