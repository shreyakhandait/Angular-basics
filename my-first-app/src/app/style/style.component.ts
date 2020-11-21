import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  ServerStatus: string = 'offline';
  serverId : number = 10;

  constructor() { 
    this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit(): void {
  }

  getServerStatus(){
    return this.ServerStatus;
  }
  getColor(){
    return this.ServerStatus === 'online' ? 'green' : 'red';
  }

}
