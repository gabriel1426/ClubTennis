import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController,
  ModalController
} from "ionic-angular";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the RecuperarcontrasenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-recuperarcontrasena',
  templateUrl: 'recuperarcontrasena.html',
})
export class RecuperarcontrasenaPage {
  LoginForm: FormGroup;
  credentials = {
    email: ""
  };


  
  constructor(
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private alertController: AlertController,
    public navCtrl: NavController,
    public proveedor: ServiciosProvider,
    private loadingController: LoadingController,
    
  ) {
    window.localStorage.removeItem("nav");
    window.localStorage.setItem("nav", "RecuperarcontrasenaPage");
    this.LoginForm = formBuilder.group({
      Email: [
        "",
        Validators.compose([Validators.maxLength(45), Validators.required])
      ]
    });
    //console.log(this.screenOrientation.type);
    //  this.screenOrientation.unlock();
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  abrirterminos() {
    //let profileModal = this.modalCtrl.create(ModalpoliticasPage);
    // profileModal.present();
  }

  Login(event) {
    if (!this.LoginForm.valid) {
      let alert = this.alertController.create({
        title: " Tennis Golf  Club",
        subTitle: "Es necesario que completes los campos requeridos.",
        buttons: ["OK"]
      });
      alert.present();
    } else {
      
      let loader = this.loadingController.create({
        content: "Verificando..."
      });

      loader.present();
      console.log("aqui");
      this.credentials.email = this.credentials.email.trim();
      this.proveedor.resetpassword(this.credentials).subscribe(
        data => {
          
          if (data.status == "ok") {
            loader.dismiss();
           
            let alert = this.alertController.create({
              title: " Tennis Golf  Club",
              subTitle: "Hemos enviado un correo electrónico a la dirección designada, por favor ábrelo y sigue con el procedimiento.",
              buttons: [
                {
                  text: "OK",
                  handler: data => {
                    this.navCtrl.setRoot(LoginPage);
                  }
                }
              ]
            });
            alert.present();
          } else {
            loader.dismiss();
            let alert = this.alertController.create({
              title: " Tennis Golf  Club",
              subTitle: "Correo inválido.",
              buttons: ["OK"]
            });
            alert.present();
            
          }
        },
        Error => {
        
            loader.dismiss();
            let alert = this.alertController.create({
              title: " Tennis Golf  Club",
              subTitle: "Fallo en la conexión.",
              buttons: [ {
                text: "OK",
                handler: data => {
                  this.navCtrl.setRoot(LoginPage);
                }
              }]
            });
            alert.present();
           
        }
      );
     
    }
  }


}
