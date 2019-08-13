import { Component } from "@angular/core";
import {  NavController, NavParams } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: "page-galeria",
  templateUrl: "galeria.html"
})
export class GaleriaPage {
  data: any;
  public url;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider
  ) {
    this.url = this.proveedor.getUrlBase();
    this.data = navParams.data;

    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GaleriaPage");
  }
}
