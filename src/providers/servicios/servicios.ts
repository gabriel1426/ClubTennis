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
  baseUrl: string = "http://3bbfdb3e.ngrok.io";

  public restaurante = [];
  public deportes = [];
  public salon = [];
  public spa = [];
  public zonas = [];
  public otros = [];

  public getUrlBase(): String {
    return this.baseUrl;
  }
  constructor(public http: HttpClient) {
    console.log("Hello ServiciosProvider Provider");
  }

 

  listarInstalaciones() {
    this.http
      .get(this.baseUrl + "/api/v1/tipoInstalacion", {
        headers: { "Content-Type": "application/json" }
      })
      .subscribe(data => {
        if (data["status"] == "ok") {
          console.log("Si entro");
          data["data"].forEach(element => {
            if (element.id == 1) {
              this.zonas = element.instalacions;
              console.log(this.zonas);
            } else if (element.id == 2) {
              this.salon = element.instalacions;
              console.log(this.salon);
            } else if (element.id == 3) {
              this.deportes = element.instalacions;
              console.log(this.deportes);
            } else if (element.id == 4) {
              this.otros = element.instalacions;
              console.log(this.otros);
            } else if (element.id == 5) {
              this.spa = element.instalacions;
              console.log(this.spa);
            } else {
              this.restaurante = element.instalacions;
              console.log(this.restaurante);
            }
          });
        }
      });
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

  //////Consultar Salones
  consultaDeSalones(): any {
    return this.salon;
  }

  //////Consultar Deportes
  consultaDeDeportes(): any {
    return this.deportes;
  }

  //////Consultar spa
  consultaDeSpa(): any {
    return this.spa;
  }

  //////Consultar spa
  getconsultaDeZonaRecreativa(): any {
    return this.zonas;
  }

  //////Consultar restaurantes
  getconsultaDeRestaurantes(): any {
    return this.restaurante;
  }

  //////Consultar spa
  consultaDeOtro(): any {
    return this.otros;
  }

   ////// Metodo que pregunta si el codigo pertenece a un golfista
   obtenerGolfista(codigo: any): Observable<any> {
    return this.http.post(
      this.baseUrl + "v1/jugadores/obtenerGolfista",
      { codigo_golfista: "{codigos: [jugador1,jugador2,jugador3]}",},
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
