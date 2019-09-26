import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { SugerenciaysaborPage } from "../sugerenciaysabor/sugerenciaysabor";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { DetalleinstalacionPage } from "../detalleinstalacion/detalleinstalacion";

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    
    this.consultar();
  }
  consultar(){
    this.proveedor.listarInstalacionesNoLogin().subscribe(data => {
      if (data["status"] == "ok") {
        console.log("Si entro");
        data["data"].forEach(element => {
          if (element.id == 6) {
            this.restaurantes=element.instalacions;
          }
        });
        if (
          typeof this.restaurantes !== "undefined" &&
          this.restaurantes !== null
        ) {
          this.longitud = this.restaurantes.length;
          this.url = this.proveedor.getUrlBase();
          this.skeletor = false;
        } else {
          this.skeletor = true;
          this.esperarInstalaciones();
        }
      }
    });
  }

  esperarInstalaciones() {
    setTimeout(() => {
      console.log("timeout");
      this.longitud = 0;
      this.skeletor = false;
    }, 5000);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RestaurantPage");
  }

  sugerenciaModal() {
    let modal1 = this.modalCtrl.create(SugerenciaysaborPage, {
      tipo: "sugerencia"
    });
    modal1.present();
  }
  saborModal() {
    let modal1 = this.modalCtrl.create(SugerenciaysaborPage, { tipo: "sabor" });
    modal1.present();
  }
  abrirDetalle(item) {
    //console.log(evento);
    this.navCtrl.push(DetalleinstalacionPage, item);
  }
}
