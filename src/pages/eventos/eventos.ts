import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { DetalleeventoPage } from "../detalleevento/detalleevento";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-eventos",
  templateUrl: "eventos.html"
})
export class EventosPage {
  eventos: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public proveedor: ServiciosProvider
  ) {
    this.consultarEventos();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }

  consultarEventos() {
    console.log("aqui");
    this.proveedor.consultaDeEventos().subscribe(Response => {
      console.log(Response);
      console.log(Response.data.token);

      if (Response.data.estatus == "ok") {
        this.eventos = Response.data.data;
        console.log(this.eventos);
      }
    });
  }

  abrirtdetalleevento() {
    this.navCtrl.push(DetalleeventoPage);
  }
}
