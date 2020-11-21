import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  allowServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created Name is'+ this.serverName;
 }

onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
