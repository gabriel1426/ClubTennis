import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearreservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearreserva',
  templateUrl: 'crearreserva.html',
})
export class CrearreservaPage {

  public fechaturno;
  public today;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("dasdasd")
    let d = new Date();
    this.fechaturno=Date;
    let dia = d.getDay();
    let finaldia= dia.toString();
    let mes = d.getMonth()
    let finalmes= mes.toString();
    if (dia<10){
    finaldia = 0+""+dia;
    }
    if (mes<10){
      finalmes = 0+""+mes;
      }
    this.today=d.getFullYear() + "-"+ finalmes + "-"+ finaldia;
    console.log(this.today+"Esta es la fech")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearreservaPage');
  }

}
