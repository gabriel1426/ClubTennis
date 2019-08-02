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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public proveedor: ServiciosProvider
  ) {
    this.da = [];
    this.da2 = [];
    this.consultarEventos();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }

  consultarEventos() {
    console.log("aqui");
    this.proveedor.consultaDeEventos().subscribe(data => {
      console.log(data);
    
      if (data.status == "ok") {
        this.da = data.data;
        this.da.forEach(element => {
          if(element.prioridad_id==2){
            this.da2.push(element);
            console.log("abajo el tamaño de liked");
            console.log(this.da.length);
          }
        })
        console.log(this.da);
        console.log( data.data);
       
      }
    });
  }

  abrirtdetalleevento() {
    this.navCtrl.push(DetalleeventoPage);
  }
}
