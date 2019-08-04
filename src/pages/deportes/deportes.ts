import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { DetalleeventoPage } from "../detalleevento/detalleevento";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider
  ) {
    this.deportes = this.proveedor.consultaDeDeportes();
    this.url = this.proveedor.getUrlBase();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DeportesPage");
  }

  abrirDetalle() {
    //console.log(evento);
    this.navCtrl.push(DetalleeventoPage, evento);
  }
}
