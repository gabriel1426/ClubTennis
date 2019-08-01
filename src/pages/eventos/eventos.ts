import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { DetalleeventoPage } from "../detalleevento/detalleevento";

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-eventos",
  templateUrl: "eventos.html"
})
export class EventosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {

  }



  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }

  

  abrirtdetalleevento() {
    this.navCtrl.push(DetalleeventoPage);
  }
}
