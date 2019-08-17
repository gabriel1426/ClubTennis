import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  MenuController
} from "ionic-angular";
import { DetalleeventoPage } from "../detalleevento/detalleevento";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  public longivarios = true;
  public skeletor = true;
  public fakeUsers: Array<any> = new Array(2);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public proveedor: ServiciosProvider,
    private menu: MenuController
  ) {
   
    this.menu.enable(true);
    this.da = [];
    this.da2 = [];
    this.da3 = [];

    this.consultarEventos();
  }

  esperarInstalaciones() {
    setTimeout(() => {
      this.longitud = 0;
      this.skeletor = false;
    }, 5000);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }

  consultarEventos() {
    this.url = this.proveedor.getUrlBase();
    if (this.proveedor.isLogged()) {
      this.da = JSON.parse(this.proveedor.consultaEventos());
      if (typeof this.da !== "undefined" && this.da !== null) {
        console.log(this.da);
        this.da.forEach(element => {
          if (element.prioridad_id == 2) {
            this.da2.push(element);
            this.longitudda2 = this.da2.length;
          }
        });
        if (typeof this.longitudda2 === "undefined") {
          this.longitudda2 = 0;
        }

        console.log(this.longitudda2);

        console.log(this.da2);
        this.longitud = this.da.length;
        if (this.longitudda2 == 1 || this.longitudda2 == 0) {
          this.longivarios = false;
        }
        this.skeletor = false;
      } else {
        this.esperarInstalaciones();
      }
    } else {
      if (localStorage["salon"] == null || localStorage["salon"] == undefined) {
        this.proveedor.listarInstalacionesNoLogin();
      }

      this.proveedor.consultaDeEventos().subscribe(
        data => {
          if (data.status == "ok") {
            this.da = data.data;
            console.log(this.da);
            this.da.forEach(element => {
              if (element.prioridad_id == 2) {
                this.da2.push(element);
                this.longitudda2 = this.da2.length;
              }
            });
            if (typeof this.longitudda2 === "undefined") {
              this.longitudda2 = 0;
            }

            console.log(this.longitudda2);

            console.log(this.da2);
            this.longitud = this.da.length;
            if (this.longitudda2 == 1 || this.longitudda2 == 0) {
              this.longivarios = false;
            }
            this.skeletor = false;
          } else {
            this.esperarInstalaciones();
          }
        },
        Error => {
          this.esperarInstalaciones();
        }
      );
    }
  }

  abrirtdetalleevento(evento) {
    this.navCtrl.push(DetalleeventoPage, evento);
  }
}
