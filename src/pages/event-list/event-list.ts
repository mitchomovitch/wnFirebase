import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetail } from '../event-detail/event-detail';
import { Event } from '../../providers/event-data';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventList {
  public eventList: any;

  constructor(public nav: NavController, public eventData: Event) {
    this.nav = nav;
    this.eventData = eventData;

    this.eventData.getEventList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          date: snap.val().date,
        });
      });
      this.eventList = rawList;
    });
  }

  goToEventDetail(eventId){
    this.nav.push(EventDetail, {
      eventId: eventId,
    });
  }
}