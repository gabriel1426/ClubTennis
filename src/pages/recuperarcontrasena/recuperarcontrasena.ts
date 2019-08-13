import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController,
  ModalController
} from "ionic-angular";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
        subTitle: "Es necesario que completes los campos requeridos",
        buttons: ["OK"]
      });
      alert.present();
    } else {
      let loader = this.loadingController.create({
        content: "Verificando..",
        duration: 3000
      });

      loader.present();
      console.log("aqui");
     
    }
  }


}
