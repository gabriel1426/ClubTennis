import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { DetalleinstalacionPage } from "../detalleinstalacion/detalleinstalacion";
/**
 * Generated class for the InstalacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-instalaciones",
  templateUrl: "instalaciones.html"
})
export class InstalacionesPage {
  public salones;
  public spa;
  public zonas;
  public url;
  public longitudsalones;
  public longitudzonas;
  public longitudspa;
  public skeletor = true;
  public fakeUsers: Array<any> = new Array(2);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider
  ) {
    this.salones = this.proveedor.consultaDeSalones();
    this.zonas = this.proveedor.getconsultaDeZonaRecreativa();
    this.spa = this.proveedor.consultaDeSpa();
    if (typeof this.salones !== "undefined") {
      this.url = this.proveedor.getUrlBase();
      this.longitudsalones = this.salones.length;
      this.longitudzonas = this.spa.length;
      this.longitudspa = this.zonas.length;
      this.skeletor = false;
    } else {
      this.skeletor = true;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InstalacionesPage");
  }
  abrirDetalle(item) {
    //console.log(evento);
    this.navCtrl.push(DetalleinstalacionPage, item);
  }
}
