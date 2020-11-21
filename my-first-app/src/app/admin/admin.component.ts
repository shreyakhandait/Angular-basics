import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  Username = '';
  Password = '';
  adminCreated = false;
  adminCreationStatus = 'No admin was created!';

  onCreateAdmin(){
    this.adminCreated = true;
    this.adminCreationStatus = 'Admin created name is ' + this.Username;
  }
}


