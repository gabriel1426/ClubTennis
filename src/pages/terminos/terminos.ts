import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-terminos',
  templateUrl: 'terminos.html',
})
export class TerminosPage {

  constructor(public viewCtrol: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosPage');
  }

  dismiss(){
    this.viewCtrol.dismiss();
   }

}
