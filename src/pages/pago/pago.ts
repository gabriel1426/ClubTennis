import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";

/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pago",
  templateUrl: "pago.html"
})
export class PagoPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public iap: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PagoPage");
  }
  openLink1() {
    this.iap.create("https://zonapagos.com/t_tennis/pagos.asp", "_blank");
  }
  openLink2() {
    this.iap.create(
      "http://www.fedegolf.net/frm/club/frmListadoAficionadosBusqueda.aspx",
      "_blank"
    );
  }
}
