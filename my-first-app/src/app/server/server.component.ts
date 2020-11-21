import { Component} from '@angular/core';

@Component({
  selector: 'app-server', //unique name
  templateUrl: './server.component.html', //template name of html
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
  serverId : number = 15;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
  
}
