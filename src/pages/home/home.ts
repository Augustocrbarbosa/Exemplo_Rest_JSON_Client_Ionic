import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clients: any;
  
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getClients();
  }

  
  getClients() {
    this.restProvider.getClients()
    .then(data => {
      this.clients = data;
      console.log(this.clients);
    });
  }
}
