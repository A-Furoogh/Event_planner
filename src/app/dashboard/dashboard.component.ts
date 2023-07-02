import { Component, OnInit, Pipe } from '@angular/core';
import { UserService } from '../user.service';
import { User, Event } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string | undefined = '';
  events: Event[] = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
      this.events = currentUser.events as Event[];
      console.log(currentUser);
      console.log(this.events);
    }
    console.log(this.username);
    console.log(this.events);
  }

  gotoNewEvent() {
    this.router.navigate(['/neweventnew']);
  }
}
