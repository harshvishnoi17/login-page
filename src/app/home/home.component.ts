import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent  {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    
    this.router.navigate(['/login']); 
  }
}
