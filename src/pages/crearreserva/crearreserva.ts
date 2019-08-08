import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the CrearreservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-crearreserva",
  templateUrl: "crearreserva.html"
})
export class CrearreservaPage {
  public fechaturno;
  public today;
  myForm: FormGroup;
  public resultados;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public proveedor: ServiciosProvider
  ) {
    this.resultados = true;
    this.myForm = this.fb.group({
      jugador1: ["", [Validators.required]],
      jugador2: ["", [Validators.required]],
      jugador3: ["", [Validators.required]]
    });
    console.log("dasdasd");
    let d = new Date();
    this.fechaturno = Date;
    let dia = d.getDay();
    let finaldia = dia.toString();
    let mes = d.getMonth();
    let finalmes = mes.toString();
    if (dia < 10) {
      finaldia = 0 + "" + dia;
    }
    if (mes < 10) {
      finalmes = 0 + "" + mes;
    }
    this.today = d.getFullYear() + "-" + finalmes + "-" + finaldia;
    console.log(this.today + "Esta es la fech");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CrearreservaPage");
  }

  saveData() {

    let jugador1=false;
    let jugador2=false;
    let jugador3=false;
    
   
    this.proveedor.obtenerGolfista(this.myForm).subscribe(data => {
      if (data.status == "ok") {
      jugador1=true;
      }
    });

    if(jugador1 && jugador2 && jugador3){

    }

  }
}
