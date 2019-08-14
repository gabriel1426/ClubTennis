import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { CrearreservaPage } from "../crearreserva/crearreserva";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the TeetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-teetime",
  templateUrl: "teetime.html"
})
export class TeetimePage {
  public skeletor = true;
  public data = [];
  public longitud;
  public fakeUsers: Array<any> = new Array(2);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider,
    private alertController: AlertController
  ) {
    
    this.consultarReservas();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeetimePage");
  }

  solicitarReserva() {
    console.log(this.proveedor.getCodGolfista());
    if(this.proveedor.getCodGolfista()==="null" ||this.proveedor.getCodGolfista()==""  ){
      let alert = this.alertController.create({
       title: " Tennis Golf  Club",
       subTitle: "<span style='text-align: justify;'>Acción solo permitida para golfistas.<br> <br>Para mas información comu- nicarse con la administración.</span>",
       buttons: ["OK"]
     });
     alert.present();
   }else {
    this.navCtrl.push(CrearreservaPage);
   }

  }

  consultarReservas() {

    

    if(this.proveedor.getCodGolfista()==null ||this.proveedor.getCodGolfista()==""  ){
       let alert = this.alertController.create({
        title: " Tennis Golf  Club",
        subTitle: "Accion no permitida",
        buttons: ["OK"]
      });
      alert.present();
    }else {
    this.proveedor.listarRecervaciones().subscribe(data => {
      console.log("Reservaciones:");
      console.log(data.data);
      if (data.status == "ok") {
        
        this.data = data.data;
        if(this.data.length>0){
          this.longitud=this.data.length;
          this.skeletor = false;
         
        }else{
          this.esperarReservas();
        }
      }
    },error=>{
      this.esperarReservas();
      });
    }
  }

  
  esperarReservas() {
    setTimeout(() => {
      this.longitud = 0;
      this.skeletor = false;
    }, 5000);
  }
}
