import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
