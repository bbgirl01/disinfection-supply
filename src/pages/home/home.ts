import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecycleIndexPage } from '../recycle/recycle-index/recycle-index';
import { SortingScanPage } from '../sorting/sorting-scan/sorting-scan';
import { WashingHomePage } from '../washing/washing-home';
import { PackIndexPage } from '../pack/pack-index';
import { PutawayHomePage } from "../putaway/putaway-home";
import { GrantIndexPage } from '../grant/grant-index';
import { SterilizationHomePage } from '../sterilization/sterilization-home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recyclePage: Object;
  sortingScanPage: any;
  washingHomePage: any;
  packIndexPage: any;
  putawayHomePage: any;
  grantIndexPage: any;
  sterilizationHomePage: any;
  constructor(public navCtrl: NavController) {
    this.recyclePage = RecycleIndexPage;
    this.sortingScanPage = SortingScanPage;
    this.washingHomePage = WashingHomePage;
    this.packIndexPage = PackIndexPage;
    this.putawayHomePage = PutawayHomePage;
    this.grantIndexPage = GrantIndexPage;
    this.sterilizationHomePage = SterilizationHomePage;
  }

}
