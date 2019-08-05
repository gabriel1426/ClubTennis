import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { DetalleinstalacionPage } from "../detalleinstalacion/detalleinstalacion";

/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-deportes",
  templateUrl: "deportes.html"
})
export class DeportesPage {
  public deportes;
  public url;
  public longitud;
  public skeletor = true;
  public fakeUsers: Array<any> = new Array(2);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider
  ) {
    this.deportes = this.proveedor.consultaDeDeportes();

    if (typeof this.deportes !== "undefined") {
      this.longitud = this.deportes.length;
      this.url = this.proveedor.getUrlBase();
      this.skeletor = false;
    } else {
      this.skeletor = true;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DeportesPage");
  }

  abrirDetalle(item) {
    //console.log(evento);
    this.navCtrl.push(DetalleinstalacionPage, item);
  }
}
