import { Component } from "@angular/core";
import {
  
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { GaleriaPage } from "../galeria/galeria";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the DetalleeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: "page-detalleevento",
  templateUrl: "detalleevento.html"
})
export class DetalleeventoPage {
  data: any;
  public url;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrol: ViewController,
    public proveedor: ServiciosProvider
  ) {
    this.data = navParams.data;
    this.url = this.proveedor.getUrlBase();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalleeventoPage");
  }
  abrirgaleria(galeria) {
    this.navCtrl.push(GaleriaPage, galeria);
  }
}
