import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive: boolean = true;
  public msgs: Array<string>
  public dummy: Array<string>
  constructor(private ref: ChangeDetectorRef) {
    // this.dummy = new Array<string>();
    // this.dummy.push('dfdf', 'dfdfdf');
    var connection = $.hubConnection('http://localhost:58949');
    var proxy = connection.createHubProxy('MyHub1');
    this.msgs = new Array<string>();    
    // receives broadcast messages from a hub function, called "broadcastMessage"
    proxy.on('Hello', (i) => {
      console.log(i);      
      this.msgs.push(i);     
      console.log(this.msgs);
      ref.detectChanges();
    });
    // atempt connection, and handle errors
    connection.start({ jsonp: true })
      .done(function () { console.log('Now connected, connection ID=' + connection.id); proxy.invoke('Hello') })
      .fail(function () { console.log('Could not connect'); });
  }

 
  
}
