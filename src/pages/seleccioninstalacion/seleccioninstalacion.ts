import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeleccioninstalacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-seleccioninstalacion',
  templateUrl: 'seleccioninstalacion.html',
})
export class SeleccioninstalacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.localStorage.removeItem("nav");
    window.localStorage.setItem("nav", "SeleccioninstalacionPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccioninstalacionPage');
  }

}
