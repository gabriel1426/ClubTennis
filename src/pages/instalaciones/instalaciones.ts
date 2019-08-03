import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";
/**
 * Generated class for the InstalacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-instalaciones",
  templateUrl: "instalaciones.html"
})
export class InstalacionesPage {
  public da;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: ServiciosProvider) {

    this.da = [];

    this.consultarInstalaciones();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InstalacionesPage");
  }

  
  consultarInstalaciones() {
    console.log("aqui");
    this.proveedor.consultaDeInstalaciones().subscribe(data => {
      console.log(data);
    
      if (data.status == "ok") {
        this.da = data.data;
        this.da.forEach(element => {
        
        })
        console.log(this.da);
       
      }
    });
  }

}
