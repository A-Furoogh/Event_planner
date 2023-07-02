import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password);
  }
  goToRegistration() {
    this.router.navigate(['/register']);
  }
}
