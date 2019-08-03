import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { GaleriaPage } from "../galeria/galeria";

/**
 * Generated class for the DetalleeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-detalleevento",
  templateUrl: "detalleevento.html"
})
export class DetalleeventoPage {
  /*data = {
    url:
      "http://administrativo.tennisgolfclub.com.co//pages//tables//img//d06a1113d0e6a3169e499b50866f1104.jpg",
    cantidad: "4",
    horario: "Lunes a Viernes de 8am  a 12 pm",
    tag: "Restaurante",
    titulo: "Restaurante Club",
    descripcion:
      "Asunto: Autorización para el uso y almacenamiento de datos personalesDando cumplimiento a lo dispuesto en la Ley 1581 de 2012, Por el cual sedictan disposiciones generales la protección de datos personales y deconformidad con lo señalado en el Decreto 1377 de 2013 para manifiesto quehe sido informado por la corporación, con la firma de este documento(Tennis Golf Club), NIT: 807004341 - 2 de lo siguiente: Lorem, ipsum dolorsit amet consectetur adipisicing elit.Numquam sed, eaque consequunturexplicabo totam laboriosam laborum vitae mollitia? Rerum praesentiumlibero ex dolores nam magnam sequi possimus voluptate eaque.Ad ?"
  };  */

  data: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrol: ViewController
  ) {
    this.data = navParams.data;
    //console.log(this.data);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalleeventoPage");
  }
  abrirgaleria(galeria) {
    this.navCtrl.push(GaleriaPage,galeria);
  }
}
