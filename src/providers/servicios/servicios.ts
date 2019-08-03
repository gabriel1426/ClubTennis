import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  baseUrl: string = "http://45963c93.ngrok.io";
  constructor(public http: HttpClient) {
    console.log("Hello ServiciosProvider Provider");
  }

  ////// Metodo de sesion
  login(datos: any): Observable<any> {
    return this.http.post(
      this.baseUrl + "/api/auth/login",
      { email: datos.email, password: datos.password },
      { headers: { "Content-Type": "application/json" } }
    );
  }

  /////////////Metodos para guardar y obtener los datos almacenados en la memoria del cell
  //Almacena los datos del usuario
  public guardarData(token: string) {
    window.localStorage.setItem("token", token);
  }

  //Metodo que valida que haya un registro de usuario
  isLogged() {
    if (window.localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  //Metodo que elimina los datos del usuario d ela memoria
  logout() {
    window.localStorage.removeItem("token");
    return true;
  }

  ///// Fin de los metodos de sesion

  //////Consultar Eventos
  consultaDeEventos(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/v1/eventos", {
      headers: { "Content-Type": "application/json" }
    });
  }

   //////Consultar Deportes
   consultaDeDeportes(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/v1/disciplinas", {
      headers: { "Content-Type": "application/json" }
    });
  }

   //////Consultar Instalaciones
   consultaDeInstalaciones(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/v1/instalaciones", {
      headers: { "Content-Type": "application/json" }
    });
  }

   //////Consultar Restaurantes
   consultaDeRestaurantes(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/v1/eventos", {
      headers: { "Content-Type": "application/json" }
    });
  }

 
}
