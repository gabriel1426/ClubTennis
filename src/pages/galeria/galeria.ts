import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.data;
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriaPage');
  }

}
