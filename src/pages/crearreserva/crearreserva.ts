import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TeetimePage } from "../teetime/teetime";
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
  public turnosHoras: Array<{ type: string; label: any; value: string }>;
  public jugadores = [];
  public resultados;
  public fecha = "";
  public hora = "";

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
      jugador2: ["", [Validators.required]],
      jugador3: ["", [Validators.required]],
      jugador4: [""]
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

  vaciar() {
    this.fecha = "";
    this.hora = "";
  }

  public turnosHora() {
    let loader = this.loadingController.create({
      content: "Cargando..."
    });

    loader.present();

    let options = [];
    let hora = [];

    if (this.fecha != "") {
      this.turnos.forEach(element => {
        if (element.fecha == this.fecha) {
          options = element.dias;
        }
      });

      if (options.length > 0) {
        options.forEach(element => {
          hora.push({
            type: "radio",
            label: element["hora"],
            value: element["id"]
          });
        });

        this.turnosHoras = hora;
        loader.dismiss();

        let alert = this.alertController.create({
          title: "Turnos Disponibles",
          inputs: this.turnosHoras,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                loader.dismiss();
                this.fecha = "";
              }
            },
            {
              text: "OK",
              handler: data => {
                this.hora = data;
                // I NEED TO GET THE VALUE OF THE SELECTED RADIO BUTTON HERE
              }
            }
          ]
        });
        alert.present();
      } else {
        loader.dismiss();
        let alert = this.alertController.create({
          title: " Tennis Golf  Club",
          subTitle: "Sin Turnos Disponibles",
          buttons: [
            {
              text: "OK",
              handler: data => {}
            }
          ]
        });
        alert.present();
        this.fecha = "";
        this.hora = "";
      }
    } else {
      loader.dismiss();
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CrearreservaPage");
  }

  obtenerFechas() {
    let loader = this.loadingController.create({
      content: "Cargando..."
    });

    loader.present();
    this.proveedor.obtenerFechas().subscribe(
      data => {
        if (data.status == "ok") {
          this.turnos = data.data;
          loader.dismiss();
          if (this.turnos.length == 0) {
            let alert = this.alertController.create({
              title: " Tennis Golf  Club",
              subTitle: "Sin Turnos Disponibles",
              buttons: [
                {
                  text: "OK",
                  handler: data => {
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
          }
        }
      },
      error => {
        loader.dismiss();
        let alert = this.alertController.create({
          title: " Tennis Golf  Club",
          subTitle: "Error en la conexión",
          buttons: [
            {
              text: "OK",
              handler: data => {
                this.navCtrl.pop();
              }
            }
          ]
        });
        alert.present();
      }
    );
  }

  saveData() {
    if (this.hora == "" || this.fecha == "") {
      let alert = this.alertController.create({
        title: " Tennis Golf  Club",
        subTitle: "Es necesario que completes los campos requeridos",
        buttons: ["OK"]
      });
      alert.present();
    }
    let loader = this.loadingController.create({
      content: "Cargando..."
    });

    loader.present();

    this.proveedor.obtenerGolfista(this.myForm).subscribe(
      data => {
        console.log(data.data);
        let codigosGolfisas = [];
        let seguir = true;

        if (data.status == "ok") {
          let cont = 0;
          data.data.forEach(element => {
            let jugador = this.proveedor.getCodGolfista();
            if (cont == 0) {
              jugador = this.proveedor.getCodGolfista();
              console.log(jugador + "jugador");
            } else if (cont == 1) {
              jugador = this.myForm.controls.jugador2.value;
              console.log(jugador + "jugador");
            } else if (cont == 2) {
              jugador = this.myForm.controls.jugador3.value;
              console.log(jugador + "jugador");
            } else if (cont == 3) {
              jugador = this.myForm.controls.jugador4.value;
              console.log(jugador + "jugador");
            }

            if (seguir) {
              if (element.status == "ok") {
                codigosGolfisas.push(element.data.codigo_golfista);
                this.jugadores.push({
                  codigo: element.data.codigo_golfista,
                  nombre: element.data.nombres
                });
              } else {
                loader.dismiss();

                let alert = this.alertController.create({
                  title: " Tennis Golf  Club",
                  subTitle: "No se encontro el jugador con codigo " + jugador,
                  buttons: ["OK"]
                });
                alert.present();
                seguir = false;
              }
            }

            cont = cont + 1;
          });

          if (seguir) {
            console.log("siguio");
            let jugadoresMostrar = "";
            this.proveedor.registrarTurno(codigosGolfisas, this.hora).subscribe(
              data => {
                if (data.status == "ok") {
                  loader.dismiss();
                  this.navCtrl.setRoot(TeetimePage);
                } else {
                  loader.dismiss();
                  let alert = this.alertController.create({
                    title: " Tennis Golf  Club",
                    subTitle: data.message,
                    buttons: ["OK"]
                  });
                  alert.present();
                }
              },
              error => {
                console.log("error");
                console.log(error.error.data.jugadores);

                this.jugadores.forEach(element => {
                  error.error.data.jugadores.forEach(element1 => {
                    if (element1 == element.codigo) {
                      console.log(element.codigo);
                      jugadoresMostrar += element.nombre + "," + "\n";
                    }
                  });
                });
                loader.dismiss();
                let alert = this.alertController.create({
                  title: " Tennis Golf  Club",
                  subTitle: error.error.message + ": \n " + jugadoresMostrar,
                  buttons: ["OK"]
                });
                alert.present();
              }
            );
          }

          console.log(codigosGolfisas);
        } else {
          loader.dismiss();
          let alert = this.alertController.create({
            title: " Tennis Golf  Club",
            subTitle: data.message,
            buttons: ["OK"]
          });
          alert.present();
        }
      },
      Error => {
        if (typeof Error.error.message !== "undefined") {
          loader.dismiss();
          let alert = this.alertController.create({
            title: " Tennis Golf  Club",
            subTitle: Error.error.message,
            buttons: ["OK"]
          });
          alert.present();
        } else {
          loader.dismiss();
          let alert = this.alertController.create({
            title: " Tennis Golf  Club",
            subTitle: "Fallo en la conexión",
            buttons: ["OK"]
          });
          alert.present();
        }
      }
    );
  }
}
