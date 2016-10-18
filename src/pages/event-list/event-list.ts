import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EventList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EventList Page');
  }

}
