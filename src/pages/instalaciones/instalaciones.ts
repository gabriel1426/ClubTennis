import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { DetalleinstalacionPage } from "../detalleinstalacion/detalleinstalacion";
/**
 * Generated class for the InstalacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  public banderaglobal = false;

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
      console.log(this.longitudsalones + "longitud");
      this.longitudzonas = this.spa.length;
      this.longitudspa = this.zonas.length;
      this.skeletor = false;
      if (
        this.longitudsalones == 0 &&
        this.longitudzonas == 0 &&
        this.longitudspa == 0
      ) {
        this.banderaglobal = true;
      }
    } else {
      this.skeletor = true;
      this.esperarInstalaciones();
    }
  }

  esperarInstalaciones() {
    setTimeout(() => {
      console.log("timeout");
      this.longitudsalones = 0;
      this.longitudzonas = 0;
      this.longitudspa = 0;
      this.banderaglobal = true;
      this.skeletor = false;
    }, 5000);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InstalacionesPage");
  }
  abrirDetalle(item) {
    //console.log(evento);
    if (item.tipo_instalacion_id == 1) {
      this.proveedor.serTipoInstalacion("Zona Recreativa");
    } else if (item.tipo_instalacion_id == 2) {
      this.proveedor.serTipoInstalacion("Salones");
    } else if (item.tipo_instalacion_id == 5) {
      this.proveedor.serTipoInstalacion("SPA");
    }
    this.navCtrl.push(DetalleinstalacionPage, item);
  }
}
