import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController,
  ToastController,
  ModalController,
  MenuController
} from "ionic-angular";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiciosProvider } from "../../providers/servicios/servicios";
import { EventosPage } from "../eventos/eventos";
import { RecuperarcontrasenaPage } from "../recuperarcontrasena/recuperarcontrasena";
import { TerminosPage } from "../terminos/terminos";
import { InAppBrowser } from "@ionic-native/in-app-browser";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    private toastCtrl: ToastController,
    private menu: MenuController,
    public iap: InAppBrowser
  ) {
    window.localStorage.removeItem("nav");
    window.localStorage.setItem("nav", "LoginPage");
    this.menu.enable(false);
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
    window.localStorage.removeItem("terminos");
    window.localStorage.setItem("terminos", "si");
    let profileModal = this.modalCtrl.create(TerminosPage);
    profileModal.present();
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
        content: "Iniciando Sesión..."
      });

      loader.present();

      console.log("aqui");
      this.credentials.email = this.credentials.email.trim();
      this.proveedor.login(this.credentials).subscribe(
        data => {
          console.log(data);
          console.log(data.data.access_token);

          if (data.status == "ok") {
            this.proveedor.guardarData(data.data.access_token);
            this.proveedor.datosUsuario();
              loader.dismiss();
              this.navCtrl.setRoot(EventosPage);
            
          } else {
            loader.dismiss();
            const toast = this.toastCtrl.create({
              message: "Error Inesperado",
              duration: 2000
            });
            toast.present();
          }
        },
        Error => {
          console.log(Error.error.message);
          if (typeof Error.error.message !== "undefined") {
            loader.dismiss();
            this.credentials.password = "";
            let alert = this.alertController.create({
              title: " Tennis Golf  Club",
              subTitle: Error.error.message + ".",
              buttons: ["OK"]
            });
            alert.present();
          } else {
            loader.dismiss();
            let alert = this.alertController.create({
              title: " Tennis Golf  Club",
              subTitle: "Fallo en la conexión.",
              buttons: ["OK"]
            });
            alert.present();
          }
        }
      );
    }
  }

  menuprincipal() {
    this.navCtrl.setRoot(EventosPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserloginPage");
  }

  forgotPasswordPagefaiil() {
    this.navCtrl.push(RecuperarcontrasenaPage);
  }
  forgotPasswordPage() {
    this.iap.create("https://appadministrador.tennisgolfclub.com.co/password/reset", "_blank");
  }
}
