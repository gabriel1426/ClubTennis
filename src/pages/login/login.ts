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
    private menu: MenuController
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
            this.proveedor.consultaDeEventosLogin().subscribe(data => {
              if (data["status"] == "ok") {
                this.proveedor.eventos = data["data"];
                window.localStorage.removeItem("eventos");
                window.localStorage.setItem(
                  "eventos",
                  JSON.stringify(data["data"])
                );
                console.log(this.proveedor.eventos);
              }
              this.proveedor.listarInstalaciones().subscribe(data => {
                if (data["status"] == "ok") {
                  console.log("Si entro");
                  data["data"].forEach(element => {
                    if (element.id == 1) {
                      window.localStorage.removeItem("zonas");
                      window.localStorage.setItem(
                        "zonas",
                        JSON.stringify(element.instalacions)
                      );
                    } else if (element.id == 2) {
                      window.localStorage.removeItem("salon");
                      window.localStorage.setItem(
                        "salon",
                        JSON.stringify(element.instalacions)
                      );
                    } else if (element.id == 3) {
                      window.localStorage.removeItem("deportes");
                      window.localStorage.setItem(
                        "deportes",
                        JSON.stringify(element.instalacions)
                      );
                    } else if (element.id == 4) {
                      window.localStorage.removeItem("otros");
                      window.localStorage.setItem(
                        "otros",
                        JSON.stringify(element.instalacions)
                      );
                    } else if (element.id == 5) {
                      window.localStorage.removeItem("spa");
                      window.localStorage.setItem(
                        "spa",
                        JSON.stringify(element.instalacions)
                      );
                    } else {
                      window.localStorage.removeItem("restaurante");
                      window.localStorage.setItem(
                        "restaurante",
                        JSON.stringify(element.instalacions)
                      );
                    }
                  });
                }
              });
              loader.dismiss();
              this.navCtrl.setRoot(EventosPage);
            });
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

  forgotPasswordPage() {
    this.navCtrl.push(RecuperarcontrasenaPage);
  }
}
