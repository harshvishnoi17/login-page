import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { StorageService } from '../_services/storage.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent  {

  user: any;

  constructor(private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {

    this.user = this.storageService.getUser()
    console.log(this.user);
  }

  goBack(): void {
    
    this.router.navigate(['/login']); 
  }
}
