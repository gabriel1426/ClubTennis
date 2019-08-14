import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { GaleriaPage } from "../galeria/galeria";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the DetalleinstalacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-detalleinstalacion",
  templateUrl: "detalleinstalacion.html"
})
export class DetalleinstalacionPage {
  data: any;
  public url;
  public tipo;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrol: ViewController,
    public proveedor: ServiciosProvider
  ) {
    this.data = navParams.data;
    this.tipo = proveedor.getTipoInstalacion();
    this.url = proveedor.getUrlBase();
  }

  abrirgaleria(galeria) {
    this.navCtrl.push(GaleriaPage, galeria);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalleinstalacionPage");
  }
}
