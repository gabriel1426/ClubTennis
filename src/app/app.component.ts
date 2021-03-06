import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { App } from "ionic-angular";
import { DeportesPage } from "../pages/deportes/deportes";
import { EventosPage } from "../pages/eventos/eventos";
import { InstalacionesPage } from "../pages/instalaciones/instalaciones";
import { LoginPage } from "../pages/login/login";
import { PagoPage } from "../pages/pago/pago";
import { PqrsPage } from "../pages/pqrs/pqrs";
import { RestaurantPage } from "../pages/restaurant/restaurant";
import { TeetimePage } from "../pages/teetime/teetime";
import { ToastController } from "ionic-angular";
import { ServiciosProvider } from "../providers/servicios/servicios";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  backPressed = false;
  public logeado: any;
  public pagina;
  pages: Array<{ title: string; component: any; icon: string }>;
  pagest: Array<{ title: string; component: any; icon: string }>;
  // luisjordan.net - Declaramos una nueva variable para controlar el texto mostrado
  text: string = "";

  constructor(
    public app: App,
    platform: Platform,
    statusBar: StatusBar,
    public proveedor: ServiciosProvider,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
        splashScreen.hide();
      }, 100);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();

      // used for an example of ngFor and navigation
      this.pages = [
        { title: "Eventos", icon: "calendar", component: EventosPage },
        { title: "Restaurante", icon: "restaurant", component: RestaurantPage },
        {
          title: "Instalaciones",
          icon: "cube",
          component: InstalacionesPage
        },
        { title: "Deportes", icon: "football", component: DeportesPage },
        {
          title: "Tee-Time",
          icon: "ribbon",
          component: TeetimePage
        },
        { title: "Pago en línea", icon: "card", component: PagoPage },
        { title: "Pqrs", icon: "mail", component: PqrsPage }
      ];
      this.pagest = [
        { title: "Iniciar Sesión", icon: "person", component: LoginPage },
        { title: "Eventos", icon: "calendar", component: EventosPage },
        { title: "Restaurante", icon: "restaurant", component: RestaurantPage },
        {
          title: "Instalaciones",
          icon: "cube",
          component: InstalacionesPage
        },
        { title: "Deportes", icon: "football", component: DeportesPage }
      ];
    });
    // Verificación de logeo
    if (localStorage["token"] == null || localStorage["token"] == undefined) {
      console.log("No aqui");
    } else {
      this.logeado = true;
      console.log("Entre aqui");
    }
    platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let view = this.nav.getActive();
      let page = view ? this.nav.getActive().instance : null;
      if (page && page instanceof LoginPage) {
      }

      // let activeView = localStorage["nav"];
      // Checks if can go back before show up the alert
      if (page && page instanceof LoginPage) {
        if (
          localStorage["terminos"] == null ||
          localStorage["terminos"] == undefined
        ) {
          platform.exitApp();
        }
      } else if (page && page instanceof EventosPage) {
        if (nav.canGoBack()) {
          nav.pop();
        } else {
          if (this.logeado == true) {
            const alert = this.alertCtrl.create({
              title: "¿Seguro que deseas salir?",
              buttons: [
                {
                  text: "No",
                  role: "cancel",
                  handler: () => {
                    this.nav.setRoot("HomePage");
                    console.log("** Saída do App Cancelada! **");
                  }
                },
                {
                  text: "Si, salir ahora",
                  handler: () => {
                    //this.logout();
                    platform.exitApp();
                  }
                }
              ]
            });
            alert.present();
          } else {
            this.nav.setRoot(LoginPage);
          }
        }
      } else if (
        (page && page instanceof RestaurantPage) ||
        (page && page instanceof InstalacionesPage) ||
        (page && page instanceof DeportesPage) ||
        (page && page instanceof TeetimePage) ||
        (page && page instanceof PagoPage) ||
        (page && page instanceof PqrsPage)
      ) {
        this.nav.setRoot(EventosPage);
      } else {
        if (nav.canGoBack()) {
          nav.pop();
        }
      }
    });
  }

  ngAfterViewInit() {
    this.nav.viewDidEnter.subscribe(data => {
      console.log("ladsdahdkahdkasdksahdka");
      var view = data.component.name;
      this.pagina = data.component.name;

      if (
        view != "LoginPage" &&
        view != "TerminosPage" &&
        view != "RecuperarcontrasenaPage"
      ) {
        // VERIFICACIÓN DE LOGEO
        if (
          localStorage["token"] == null ||
          localStorage["token"] == undefined
        ) {
          this.logeado = false;
          console.log("No Estas logeado");
          //this.nav.setRoot(IntroductionPage);
        } else {
          console.log("Estas logeado");
          this.logeado = true;
        }
      } else {
        this.logeado = false;
      }
    });

    // VERIFICACIÓN DE LOGEO
    if (localStorage["token"] == null || localStorage["token"] == undefined) {
      this.nav.setRoot(LoginPage);
    } else {
      this.logeado = true;
      this.nav.setRoot(EventosPage);
    }
  }

  salir() {
    this.proveedor.logout().subscribe(
      data => {
        if (data["status"] == "ok") {
          console.log("saliii");
          console.log(data);
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("codigo_golfista");
          window.localStorage.removeItem("codigo_usuario");
          this.logeado = false;
          this.nav.setRoot(LoginPage);
        } else {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("codigo_golfista");
          window.localStorage.removeItem("codigo_usuario");
          this.logeado = false;
          this.nav.setRoot(LoginPage);
        }
      },
      error => {
        console.log(error);
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("codigo_golfista");
        window.localStorage.removeItem("codigo_usuario");
        this.logeado = false;
        this.nav.setRoot(LoginPage);
      }
    );
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "Restaurante") {
      this.proveedor.serTipoInstalacion(page.title);
    } else if (page.title == "Instalaciones") {
      this.proveedor.serTipoInstalacion(page.title);
    } else if (page.title == "Deportes") {
      this.proveedor.serTipoInstalacion(page.title);
    }
    this.nav.setRoot(page.component);
  }

  rightMenuClick(text) {
    this.text = text;
  }
}
