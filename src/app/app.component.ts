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
import { ZonasociosPage } from "../pages/zonasocios/zonasocios";
import { ToastController } from "ionic-angular";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  backPressed = false;
  pages: Array<{ title: string; component: any; icon: string }>;
  // luisjordan.net - Declaramos una nueva variable para controlar el texto mostrado
  text: string = "";

  constructor(
    public app: App,
    platform: Platform,
    statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
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
          title: "Zona de socios",
          icon: "ribbon",
          component: ZonasociosPage
        },
        { title: "Pago en linea", icon: "card", component: PagoPage },
        { title: "Pqrs", icon: "mail", component: PqrsPage }
      ];
    });
    platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if (activeView.name === "EventosPage") {
        if (nav.canGoBack()) {
          nav.pop();
        } else {
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
        }
      } else if (
        activeView.name === "RestaurantPage" ||
        activeView.name === "InstalacionesPage" ||
        activeView.name === "DeportesPage" ||
        activeView.name === "ZonasociosPage" ||
        activeView.name === "PagoPage" ||
        activeView.name === "PqrsPage"
      ) {
        this.nav.setRoot(EventosPage);
      } else {
        if (nav.canGoBack()) {
          nav.pop();
        }
      }
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  rightMenuClick(text) {
    this.text = text;
  }
}
