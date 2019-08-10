import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { DeportesPage } from "../pages/deportes/deportes";
import { EventosPage } from "../pages/eventos/eventos";
import { InstalacionesPage } from "../pages/instalaciones/instalaciones";
import { LoginPage } from "../pages/login/login";
import { PagoPage } from "../pages/pago/pago";
import { PqrsPage } from "../pages/pqrs/pqrs";
import { RestaurantPage } from "../pages/restaurant/restaurant";
import { TeetimePage } from "../pages/teetime/teetime";
import { ZonasociosPage } from "../pages/zonasocios/zonasocios";
import { GaleriaPage } from "../pages/galeria/galeria";
import { RecuperarcontrasenaPage } from "../pages/recuperarcontrasena/recuperarcontrasena";
import { DetalleinstalacionPage } from "../pages/detalleinstalacion/detalleinstalacion";
import { DetalleeventoPage } from "../pages/detalleevento/detalleevento";
import { CrearreservaPage } from "../pages/crearreserva/crearreserva";

//modales
import { SugerenciaysaborPage } from "../pages/sugerenciaysabor/sugerenciaysabor";
import { TerminosPage } from '../pages/terminos/terminos';

import { IonHeaderScrollOpacityModule } from "ion-header-scroll-opacity";

//Privider and service
import { ServiciosProvider } from "../providers/servicios/servicios";
import { HttpClientModule } from "@angular/common/http";

//plugins
import { InAppBrowser } from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeportesPage,
    EventosPage,
    InstalacionesPage,
    LoginPage,
    PagoPage,
    PqrsPage,
    RestaurantPage,
    TeetimePage,
    ZonasociosPage,
    DetalleeventoPage,
    SugerenciaysaborPage,
    GaleriaPage,
    RecuperarcontrasenaPage,
    DetalleinstalacionPage,
    CrearreservaPage,
    TerminosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonHeaderScrollOpacityModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeportesPage,
    EventosPage,
    InstalacionesPage,
    LoginPage,
    PagoPage,
    PqrsPage,
    RestaurantPage,
    TeetimePage,
    ZonasociosPage,
    DetalleeventoPage,
    SugerenciaysaborPage,
    GaleriaPage,
    RecuperarcontrasenaPage,
    DetalleinstalacionPage,
    CrearreservaPage,
    TerminosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiciosProvider,
    InAppBrowser
  ]
})
export class AppModule {}
