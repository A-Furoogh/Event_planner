import { Component } from '@angular/core';
import { Event, Location, Guest, Cost } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'appneweventnew',
  templateUrl: './neweventnew.component.html',
  styleUrls: ['./neweventnew.component.css']
})
export class NeweventnewComponent {
  eventName?: string;
  eventDate?: Date;
  totalCost?: number;
  totalGuests?: number;
  costs: Cost[] = [ {id: 0, costName: '', costAmount: 0, isPaid: false}];
  guests: Guest[] = [{id: 0, guestName: '', address: '', phone: 0, attendantNumber: 0}];
  location: Location = { address: '', capacity: 0, locationName: '', isPaid: false};

  constructor(private router: Router, private userService: UserService) {}

  createEvent() {
    const event: Event = {
      id: this.eventIdgenerator(),
      eventName: this.eventName,
      eventDate: this.eventDate,
      totalCost: this.totalCost,
      totalGuests: this.totalGuests,
      costs: this.costs,
      guests: this.guests,
      location: this.location
    };

    
    this.userService.saveEvent(event);

   
    this.eventName = '';
    this.eventDate = undefined;
    this.totalCost = undefined;
    this.totalGuests = undefined;
    this.costs = [];
    this.guests = [];
    this.location = {};

    
    alert('Veranstaltung erstellt!');

    
    this.router.navigate(['/dashboard']);
  }

  addCost() {
    const newCost: Cost = {};
    this.costs.push(newCost);
  }

  removeCost(index: number) {
    this.costs.splice(index, 1);
  }

  addGuest() {
    const newGuest: Guest = {};
    this.guests.push(newGuest);
  }

  removeGuest(index: number) {
    this.guests.splice(index, 1);
  }

  eventIdgenerator() :number {
    // Überprüfen, ob es bereits eine Event-ID gibt
    if (localStorage.getItem('eventId') === null) {
      localStorage.setItem('eventId', '0');
    }
    // Event-ID um 1 erhöhen
    const eventId = Number(localStorage.getItem('eventId')) + 1; 
    return eventId;
  }

}
