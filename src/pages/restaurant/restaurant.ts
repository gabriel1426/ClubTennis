import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SugerenciaysaborPage } from "../sugerenciaysabor/sugerenciaysabor";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { DetalleinstalacionPage } from "../detalleinstalacion/detalleinstalacion";

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-restaurant",
  templateUrl: "restaurant.html"
})
export class RestaurantPage {
  public url;
  public restaurantes;
  public longitud;
  public skeletor = true;
  public fakeUsers: Array<any> = new Array(2);
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public proveedor: ServiciosProvider
  ) {
    this.restaurantes = this.proveedor.getconsultaDeRestaurantes();
    if (typeof this.restaurantes !== "undefined") {
      this.longitud = this.restaurantes.length;
      this.url = this.proveedor.getUrlBase();
      this.skeletor = false;
    } else {
      this.skeletor = true;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RestaurantPage");
  }

  sugerenciaysaborModal() {
    let modal1 = this.modalCtrl.create(SugerenciaysaborPage);
    modal1.present();
  }
  abrirDetalle(item) {
    //console.log(evento);
    this.navCtrl.push(DetalleinstalacionPage, item);
  }
}
