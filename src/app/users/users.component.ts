import { Component, OnInit } from '@angular/core';
import { NavBarComponentComponent } from '../nav-bar-component/nav-bar-component.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavBarComponentComponent, ReactiveFormsModule, CommonModule, NgxPaginationModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] 
})
export class UsersComponent implements OnInit  {
  userForm: FormGroup;
    

  newUser = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    currentAddress: '',
    permanentAddress: '',
    organizationID: 0
  };
  

  userList = [
    {    id: 0,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "contact": "123-456-7890",
        "currentAddress": "123 Maple Street, New York, NY",
        "permanentAddress": "456 Oak Street, Los Angeles, CA",
        "organizationID": 1
    },
    {    id: 1,
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "contact": "234-567-8901",
        "currentAddress": "789 Pine Avenue, San Francisco, CA",
        "permanentAddress": "321 Elm Street, Seattle, WA",
        "organizationID": 2
    },
    {    id: 2,
        "firstName": "Michael",
        "lastName": "Johnson",
        "email": "michael.johnson@example.com",
        "contact": "345-678-9012",
        "currentAddress": "456 Birch Lane, Chicago, IL",
        "permanentAddress": "987 Cedar Street, Austin, TX",
        "organizationID": 3
    },
    {    id: 3,
        "firstName": "Emily",
        "lastName": "Davis",
        "email": "emily.davis@example.com",
        "contact": "456-789-0123",
        "currentAddress": "321 Spruce Road, Miami, FL",
        "permanentAddress": "654 Fir Street, Orlando, FL",
        "organizationID": 4
    },
    {    id: 4,
        "firstName": "Chris",
        "lastName": "Martinez",
        "email": "chris.martinez@example.com",
        "contact": "567-890-1234",
        "currentAddress": "987 Palm Boulevard, Denver, CO",
        "permanentAddress": "123 Cypress Avenue, Boulder, CO",
        "organizationID": 5
    },
    {    id: 5,
        "firstName": "Jessica",
        "lastName": "Lopez",
        "email": "jessica.lopez@example.com",
        "contact": "678-901-2345",
        "currentAddress": "654 Willow Drive, Toronto, ON",
        "permanentAddress": "321 Maple Avenue, Ottawa, ON",
        "organizationID": 6
    },
    {    id: 6,
        "firstName": "David",
        "lastName": "Gonzalez",
        "email": "david.gonzalez@example.com",
        "contact": "789-012-3456",
        "currentAddress": "123 Cedar Street, Sydney, NSW",
        "permanentAddress": "456 Birch Road, Melbourne, VIC",
        "organizationID": 7
    },
    {    id: 7,
        "firstName": "Laura",
        "lastName": "Anderson",
        "email": "laura.anderson@example.com",
        "contact": "890-123-4567",
        "currentAddress": "789 Ash Lane, Singapore",
        "permanentAddress": "321 Oak Avenue, Kuala Lumpur",
        "organizationID": 8
    },
    {    id: 8,
        "firstName": "Brian",
        "lastName": "Wilson",
        "email": "brian.wilson@example.com",
        "contact": "901-234-5678",
        "currentAddress": "654 Poplar Road, Dubai",
        "permanentAddress": "123 Elm Street, Abu Dhabi",
        "organizationID": 9
    },
    {   id: 9,
        "firstName": "Sarah",
        "lastName": "Hernandez",
        "email": "sarah.hernandez@example.com",
        "contact": "012-345-6789",
        "currentAddress": "987 Pine Lane, Tokyo",
        "permanentAddress": "321 Cherry Avenue, Osaka",
        "organizationID": 10
    },
    {    id: 10,
        "firstName": "James",
        "lastName": "Lee",
        "email": "james.lee@example.com",
        "contact": "123-456-7890",
        "currentAddress": "321 Maple Street, Seoul",
        "permanentAddress": "456 Oak Avenue, Busan",
        "organizationID": 11
    },
    {    id: 11,
        "firstName": "Megan",
        "lastName": "Brown",
        "email": "megan.brown@example.com",
        "contact": "234-567-8901",
        "currentAddress": "987 Pine Street, Hong Kong",
        "permanentAddress": "123 Elm Lane, Beijing",
        "organizationID": 12
    },
    {   id: 12,
        "firstName": "Daniel",
        "lastName": "Kim",
        "email": "daniel.kim@example.com",
        "contact": "345-678-9012",
        "currentAddress": "654 Birch Avenue, Manila",
        "permanentAddress": "321 Cedar Street, Jakarta",
        "organizationID": 13
    },
    {    id: 13,
        "firstName": "Ashley",
        "lastName": "Clark",
        "email": "ashley.clark@example.com",
        "contact": "456-789-0123",
        "currentAddress": "789 Willow Road, Bangkok",
        "permanentAddress": "987 Palm Lane, Hanoi",
        "organizationID": 14
    },
    {    id: 14,
        "firstName": "Robert",
        "lastName": "Moore",
        "email": "robert.moore@example.com",
        "contact": "567-890-1234",
        "currentAddress": "321 Spruce Lane, Kuala Lumpur",
        "permanentAddress": "654 Fir Street, Singapore",
        "organizationID": 15
    },
    {   id: 15,
        "firstName": "Olivia",
        "lastName": "Taylor",
        "email": "olivia.taylor@example.com",
        "contact": "678-901-2345",
        "currentAddress": "987 Ash Avenue, Berlin",
        "permanentAddress": "123 Maple Road, Munich",
        "organizationID": 16
    },
    {    id: 16,
        "firstName": "Anthony",
        "lastName": "Thomas",
        "email": "anthony.thomas@example.com",
        "contact": "789-012-3456",
        "currentAddress": "654 Poplar Lane, Paris",
        "permanentAddress": "321 Cedar Avenue, Lyon",
        "organizationID": 17
    },
    {    id: 17,
        "firstName": "Sophia",
        "lastName": "Martinez",
        "email": "sophia.martinez@example.com",
        "contact": "890-123-4567",
        "currentAddress": "789 Pine Street, Madrid",
        "permanentAddress": "123 Oak Lane, Barcelona",
        "organizationID": 18
    },
    {    id: 18,
        "firstName": "William",
        "lastName": "Garcia",
        "email": "william.garcia@example.com",
        "contact": "901-234-5678",
        "currentAddress": "321 Elm Lane, Rome",
        "permanentAddress": "987 Birch Avenue, Milan",
        "organizationID": 19
    },
    {    id: 19,
        "firstName": "Emma",
        "lastName": "Rodriguez",
        "email": "emma.rodriguez@example.com",
        "contact": "012-345-6789",
        "currentAddress": "456 Spruce Road, Vienna",
        "permanentAddress": "654 Fir Lane, Salzburg",
        "organizationID": 20
    }

]


currentPage: number = 1; 
itemsPerPage: number = 5; 

addUser() {
  this.newUser.id = this.userList.length + 1;
  this.userList.push({ ...this.newUser });
  this.newUser = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    currentAddress: '',
    permanentAddress: '',
    organizationID: 0
  };}


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      organizationID: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      const newUser = {
        id: this.userList.length + 1,
        ...this.userForm.value
      };
      this.userList.push(newUser);
      this.userForm.reset();
    }
  }
  

}
