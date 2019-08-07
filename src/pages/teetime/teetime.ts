import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearreservaPage } from '../crearreserva/crearreserva';


/**
 * Generated class for the TeetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teetime',
  templateUrl: 'teetime.html',
})
export class TeetimePage {

  public skeletor = true;
  public fakeUsers: Array<any> = new Array(2);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeetimePage');
  }

  solicitarReserva() {
    this.navCtrl.push(CrearreservaPage);
  }

}
