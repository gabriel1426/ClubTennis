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
  public da;
  public da2;
  public da3;
  public url;
  public longitud;
  public longitudda2;
  public skeletor = true;
  public fakeUsers: Array<any> = new Array(2);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public proveedor: ServiciosProvider
  ) {
    this.da = [];
    this.da2 = [];
    this.da3 = [];

    this.consultarEventos();
    this.proveedor.listarInstalaciones();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }

  consultarEventos() {
    this.url = this.proveedor.getUrlBase();
    console.log("aqui");
    this.proveedor.consultaDeEventos().subscribe(data => {
      if (data.status == "ok") {
        this.da = data.data;
        this.da.forEach(element => {
          if (element.prioridad_id == 2) {
            this.da2.push(element);
            this.longitudda2 = this.da2.length;
          }
        });
        this.longitud = this.da.length;
        this.skeletor = false;
      }
    });
  }

  abrirtdetalleevento(evento) {
    //console.log(evento);
    this.navCtrl.push(DetalleeventoPage, evento);
  }
}
