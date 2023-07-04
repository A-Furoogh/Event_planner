import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User, Event } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';

  constructor(private router: Router, private userService: UserService) { }

  login(username: string, password: string) {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.userService.setCurrentUser(user);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Benutzername oder Passwort falsch!');
    }
  }

  register(username: string, email: string, password: string) {
    const users = this.getUsers();
    const newUser: User = {
      username: username,
      email: email,
      password: password,
      events: [] 
    };
    
    const initialEvent: Event = {
      id: 1,
      eventName: 'Meine erste Party',
      eventDate: new Date(),
      totalCost: 700,
      totalGuests: 11,
      guests: [{
        id: 1,
        guestName: 'Mustermann',
        address: 'Ahlen',
        phone: +4915734472831,
        attendantNumber: 4
      },
      {
        id: 2,
        guestName: 'Musterfrau',
        address: 'Düsseldorf',
        phone: +4915734472831,
        attendantNumber: 7
      }],
      costs: [{
        id: 1,
        costName: 'Kauf von Stühle',
        costAmount: 500,
        isPaid: true
      }, {
        id: 2,
        costName: 'Kauf von Getränke',
        costAmount: 200,
        isPaid: false
      }],
      location: {
        address: 'Düsseldorf',
        capacity: 2000,
        locationName: 'Arena Düsseldorf',
        isPaid: false
      }
    };
    
    newUser.events.push(initialEvent);
    
    users.push(newUser);
    this.setUsers(users);
  }

  private getUsers(): User[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  private setUsers(users: User[]) {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}
