import { Component } from "@angular/core";
import { NavController, LoadingController, NavParams,AlertController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the PqrsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-pqrs",
  templateUrl: "pqrs.html"
})
export class PqrsPage {
  myForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public proveedor: ServiciosProvider
  ) {
    this.myForm = this.fb.group({
      asunto: ["", [Validators.required]],
      mensaje: ["", [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PqrsPage");
  }

  saveData() {
    let loader = this.loadingController.create({
      content: "Cargando..."
    });

    loader.present();
    this.proveedor.savePqrs(this.myForm).subscribe(data => {

      if (data.status == "ok") {
        loader.dismiss();
        let alert = this.alertController.create({
          title: " Tennis Golf  Club",
          subTitle: "Mensaje enviado exitosamente",
          buttons: [
            {
              text: "OK",
              handler: data => {
                this.myForm.controls.asunto.setValue("");
                this.myForm.controls.mensaje.setValue("");
              }
            }
          ]
        });
        alert.present();

      }

      
      console.log(data);
    },error=>{
      loader.dismiss();
      let alert = this.alertController.create({
        title: " Tennis Golf  Club",
        subTitle: "Error en la conexión",
        buttons: [
          {
            text: "OK",
            handler: data => {
             
            }
          }
        ]
      });
      alert.present();

    });
  }
}
