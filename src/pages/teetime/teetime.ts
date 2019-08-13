import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CrearreservaPage } from "../crearreserva/crearreserva";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the TeetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-teetime",
  templateUrl: "teetime.html"
})
export class TeetimePage {
  public skeletor = true;
  public data;
  public longitud = 1;
  public fakeUsers: Array<any> = new Array(2);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider
  ) {
    this.data = [];
    this.consultarReservas();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeetimePage");
  }

  solicitarReserva() {
    this.navCtrl.push(CrearreservaPage);
  }

  consultarReservas() {
    this.proveedor.listarRecervaciones().subscribe(data => {
      console.log("Reservaciones:");
      console.log(data.data);
      if (data.status == "ok") {
        this.skeletor = false;
        this.data = data.data;
      }
    });
  }
}
