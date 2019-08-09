import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { GaleriaPage } from "../galeria/galeria";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the DetalleinstalacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-detalleinstalacion",
  templateUrl: "detalleinstalacion.html"
})
export class DetalleinstalacionPage {
  data: any;
  public url;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrol: ViewController,
    public proveedor: ServiciosProvider
  ) {
    this.data = navParams.data;
    this.url = proveedor.getUrlBase();
  }

  abrirgaleria(galeria) {
    this.navCtrl.push(GaleriaPage, galeria);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalleinstalacionPage");
  }
}