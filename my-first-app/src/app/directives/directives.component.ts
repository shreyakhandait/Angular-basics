import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver 1' , 'Testserver 2'];

  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created Name is'+ this.serverName;
 }

onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}





}
