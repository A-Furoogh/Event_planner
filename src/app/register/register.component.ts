import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  register() {
    if(this.password != this.confirmPassword) {
      alert('Passwörter stimmen nicht überein!');
      return;
    }
    this.authService.register(this.username, this.email, this.password);
    this.router.navigate(['/login']);
  }
}
