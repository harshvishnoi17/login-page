import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-nav-bar-component',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-component.component.html',
  styleUrl: './nav-bar-component.component.css'
})
export class NavBarComponentComponent {

  user: any;

  constructor(private router: Router,
    private storageService: StorageService 
  ) { }

  ngOnInit(): void {
    this.user = this.storageService.getUser()
  }



  clickHome() {
    this.router.navigate(['/home']); 
  }

  clickOrgList() {
    this.router.navigate(['/org-list']); 
  }

  
  clickUsers() {
    this.router.navigate(['/users']); 
  }


  signOut() {
    this.storageService.clean();
    this.router.navigate(['/login']); 
  }

}
