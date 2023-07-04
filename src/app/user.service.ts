import { Injectable } from '@angular/core';
import { User, Event, Location, Cost, Guest } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserKey = 'currentUser';

  constructor() { }

  private getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem(this.currentUserKey);
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }

  private saveUserToLocalStorage(user: User) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  private removeUserFromLocalStorage() {            // Bearbeitungsbedarf
    localStorage.removeItem(this.currentUserKey);
  }

  getEvents(): Event[] {
    const currentUser = this.getUserFromLocalStorage();
    return currentUser ? currentUser.events : [];
  }

  saveEvent(event: Event) {
    const currentUser = this.getUserFromLocalStorage();
    if (currentUser) {
      const newEventId = this.generateUniqueId(currentUser.events);
  
      event.id = newEventId;
  
      currentUser.events.push(event);
      this.saveUserToLocalStorage(currentUser);
    }
  }
  
  private generateUniqueId(events: Event[]): number {
    let maxId = 0;
    for (const event of events) {
      if (event.id > maxId) {
        maxId = event.id;
      }
    }
    return maxId + 1;
  }
  

  getEvent(id: number): Event | undefined {
    const currentUser = this.getUserFromLocalStorage();
    if (currentUser) {
      return currentUser.events.find(event => event.id === id);
    }
    return undefined;
  }

  updateEvent(event: Event) {                           // Bearbeitungsbedarf
    const currentUser = this.getUserFromLocalStorage();
    if (currentUser) {
      const index = currentUser.events.findIndex(e => e.id === event.id);
      if (index !== -1) {
        currentUser.events[index] = event;
        this.saveUserToLocalStorage(currentUser);
      }
    }
  }

  deleteEvent(id: number) {
    const currentUser = this.getUserFromLocalStorage();
    if (currentUser) {
      const index = currentUser.events.findIndex(event => event.id === id);
      if (index !== -1) {
        currentUser.events.splice(index, 1);
        this.saveUserToLocalStorage(currentUser);
      }
    }
  }

  setCurrentUser(user: User) {
    this.saveUserToLocalStorage(user);
  }

  getCurrentUser(): User | null {
    return this.getUserFromLocalStorage();
  }
}
