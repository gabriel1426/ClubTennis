import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ToastController,
  ModalController
} from "ionic-angular";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../classes/User";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { EventosPage } from "../eventos/eventos";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  LoginForm: FormGroup;
  credentials = {
    email: "",
    password: ""
  };

  constructor(
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private alertController: AlertController,
    public navCtrl: NavController,
    public proveedor: ServiciosProvider,
    private loadingController: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.LoginForm = formBuilder.group({
      Email: [
        "",
        Validators.compose([Validators.maxLength(45), Validators.required])
      ],
      Password: ["", Validators.compose([Validators.required])]
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
        content: "Iniciando Sesion...",
        duration: 3000
      });

      loader.present();
      console.log("aqui");
      this.proveedor.login(this.credentials).subscribe(data => {
        console.log(data);
        console.log(data.token);
        this.navCtrl.setRoot(EventosPage);

        if (data.respuesta.estatus == "ok") {
          this.proveedor.guardarData(data.token);
          const toast = this.toastCtrl.create({
            message: "ingreso exitoso",
            duration: 2000
          });
          toast.present();

          this.navCtrl.setRoot(EventosPage);
        } else {
          this.credentials.password = "";
          const toast = this.toastCtrl.create({
            message: "No se pudo completar el registro",
            duration: 2000
          });
          toast.present();
        }
      });
    }
  }

  menuprincipal() {
    //this.navCtrl.push(MenuprincipalPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserloginPage");
  }

  forgotPasswordPage() {
    // this.navCtrl.push(RecuperarPage);
  }
}
