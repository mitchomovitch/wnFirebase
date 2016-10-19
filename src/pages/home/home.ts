import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { EventCreate } from '../event-create/event-create';
import { EventList } from '../event-list/event-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goToProfile(){
    this.nav.push(Profile);
  }

  goToCreate(){
    this.nav.push(EventCreate);
  }

  goToList(){
    this.nav.push(EventList);
  }



}