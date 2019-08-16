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
  public cantidad=0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrol: ViewController,
    public proveedor: ServiciosProvider
  ) {
    window.localStorage.removeItem("nav");
    window.localStorage.setItem("nav", "DetalleinstalacionPage");
    this.data = navParams.data;
    this.tipo = proveedor.getTipoInstalacion();
    this.url = proveedor.getUrlBase();
    this.cantidad= this.data.imagenes_instalacions.length;
    if(typeof this.cantidad === "undefined"){
      this.cantidad=0;
  }
  }

  abrirgaleria(galeria) {
    this.navCtrl.push(GaleriaPage, galeria);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalleinstalacionPage");
  }
}
