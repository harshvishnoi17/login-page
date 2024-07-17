import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponentComponent } from '../nav-bar-component/nav-bar-component.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [NavBarComponentComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent {
  orgList = [
    { id: 1, name: "Insynchro", address: "Kuala Lumpur", contactNumber: "123-456-7890" },
    { id: 2, name: "TechCorp", address: "New York", contactNumber: "234-567-8901" },
    { id: 3, name: "SoftSolutions", address: "San Francisco", contactNumber: "345-678-9012" },
    { id: 4, name: "GlobalTech", address: "London", contactNumber: "456-789-0123" },
    { id: 5, name: "InnoWorks", address: "Berlin", contactNumber: "567-890-1234" },
    { id: 6, name: "CloudNet", address: "Toronto", contactNumber: "678-901-2345" },
    { id: 7, name: "DataStream", address: "Sydney", contactNumber: "789-012-3456" },
    { id: 8, name: "FutureTech", address: "Singapore", contactNumber: "890-123-4567" },
    { id: 9, name: "NetSolutions", address: "Dubai", contactNumber: "901-234-5678" },
    { id: 10, name: "CyberWare", address: "Tokyo", contactNumber: "012-345-6789" }
  ];

  newOrganization = {
    id: 0,
    name: '',
    address: '',
    contactNumber: '',
  };

  currentPage: number = 1;
  itemsPerPage: number = 5; 

  addOrganization() {
    this.newOrganization.id = this.orgList.length + 1;
    this.orgList.push({ ...this.newOrganization });

    this.newOrganization = {
      id: 0,
      name: '',
      address: '',
      contactNumber: ''
    };
  }
}
