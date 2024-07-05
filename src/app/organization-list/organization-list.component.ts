import { Component } from '@angular/core';
import { NavBarComponentComponent } from '../nav-bar-component/nav-bar-component.component';

@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [NavBarComponentComponent],
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.css'
})
export class OrganizationListComponent {

  orgList = [
    {id: 1, name: "Insynchro", address: "Kuala Lumpur"},
    {id: 1, name: "Insynchro", address: "Kuala Lumpur"},
    {id: 1, name: "Insynchro", address: "Kuala Lumpur"},
];

}
