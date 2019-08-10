import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from "ionic-angular";
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
  public turnos: any;
  public turnosHoras: Array<{ type: string, label: any, value: string }>;
  public resultados;
  public fecha="";
  public hora="";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public proveedor: ServiciosProvider
  ) {
    this.obtenerFechas();
    this.resultados = true;
    this.myForm = this.fb.group({
      jugador1: ["", [Validators.required]],
      jugador2: ["", [Validators.required]],
      jugador3: ["", [Validators.required]]
    });
    
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
   
  }

  public turnosHora() {

    let loader = this.loadingController.create({
      content: "Cargando..."
    });

    loader.present();
    
    let options:[];
    let hora = [];
      
    if(this.fecha!=""){
      
      this.turnos.forEach(element => {
        if(element.fecha==this.fecha){
         console.log(this.fecha)
         options=element.dias;
        };
    });

    if(options.length>0){

       options.forEach(element => {
         
         console.log(this.fecha)
         hora.push({ type: 'radio', label: element['hora'], value: element['hora'] });
         
     });

     this.turnosHoras=hora;

    }
  
      loader.dismiss();

      let alert = this.alertController.create({
        title: 'Selecciona un turno',
        inputs: this.turnosHoras,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              loader.dismiss();
             this.fecha="";
            }
          },
          {
            text: 'OK',
            handler: (data) => {
              console.log(data );
              this.hora=data;
              // I NEED TO GET THE VALUE OF THE SELECTED RADIO BUTTON HERE
            }
          }
        ]
      });
      alert.present();
    }else {
      loader.dismiss();
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CrearreservaPage");
  }

  obtenerFechas(){

    let loader = this.loadingController.create({
      content: "Cargando..."
    });

    loader.present();
    this.proveedor.obtenerFechas().subscribe(data => {
      if (data.status == "ok") {
        this.turnos= data.data;
       
        loader.dismiss();
      }
    });
  }

  saveData() {

    if(this.hora=="" || this.fecha==""){
      let alert = this.alertController.create({
        title: " Tennis Golf  Club",
        subTitle: "Es necesario que completes los campos requeridos",
        buttons: ["OK"]
      });
      alert.present();
    }

    let jugador1=false;
    let jugador2=false;
    let jugador3=false;
    
   
    this.proveedor.obtenerGolfista(this.myForm).subscribe(data => {
      if (data.status == "ok") {
      
      }else {

      }
    }, error =>{

    });

    if(jugador1 && jugador2 && jugador3){

    }

  }
}
