import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the SugerenciaysaborPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-sugerenciaysabor",
  templateUrl: "sugerenciaysabor.html"
})
export class SugerenciaysaborPage {
  public data;
  public url;
  public urlbase;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider
  ) {
    window.localStorage.removeItem("nav");
    window.localStorage.setItem("nav", "SugerenciaysaborPage");
    this.data = navParams.data;
    this.urlbase = this.proveedor.getUrlBase();

    if (this.data.tipo == "sugerencia") {
      this.proveedor.getsabor().subscribe(data => {
        if (data["status"] == "ok") {
          console.log(data["data"]["url"]);
          this.url = data["data"]["url"];
        }
      });
    } else {
      this.proveedor.getSugerencias().subscribe(data => {
        if (data["status"] == "ok") {
          console.log(data["data"]["url"]);
          this.url = data["data"]["url"];
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SugerenciaysaborPage");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
