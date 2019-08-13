import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Console } from "@angular/core/src/console";

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  public baseUrl: string = "http://a8726ec9.ngrok.io";

  public restaurante;
  public deportes;
  public salon;
  public spa;
  public zonas;
  public otros;
  public codigoGolfista = "";

  public getUrlBase(): String {
    return this.baseUrl;
  }
  public getCodGolfista(): String {
    return window.localStorage.getItem("codigo_golfista");
  }

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

  ////Metodo utilizado para saber los datos del usuario

  datosUsuario() {
    let token = this.getToken();
    console.log("token" + token);
    this.http
      .post(
        this.baseUrl + "/api/auth/me",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        }
      )
      .subscribe(data => {
        console.log("usuario");
        window.localStorage.setItem("codigo_golfista", data["codigo_golfista"]);
        this.codigoGolfista = data["codigo_golfista"];
        console.log(data);
      });
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

  getToken() {
    return window.localStorage.getItem("token");
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
    window.localStorage.removeItem("codigo_golfista");
    console.log("saliii");
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

  ////// Metodo utilizado para solicitar las fechas dispobibles en el tee-time
  obtenerFechas(): Observable<any> {
    //const headeres = new HttpHeaders({'Authorization':this.getToken+""});
    let token = this.getToken();
    return this.http.get(
      this.baseUrl + "/api/v1/tee-time/obtenerDiasDisponibles",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      }
    );
  }

  ////// Metodo que pregunta si el codigo pertenece a un golfista
  obtenerGolfista(codigo: any): Observable<any> {
    let values = [];
    if (codigo.controls.jugador4.value != "") {
      values = [
        this.codigoGolfista,
        codigo.controls.jugador2.value,
        codigo.controls.jugador3.value,
        codigo.controls.jugador4.value
      ];
    } else {
      values = [
        this.codigoGolfista,
        codigo.controls.jugador2.value,
        codigo.controls.jugador3.value
      ];
    }

    let token = this.getToken();
    return this.http.post(
      this.baseUrl + "/api/v1/tee-time/obtenerGolfistas",
      { codigos: values },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      }
    );
  }

  ////// Metodo utilizado para registrar un turno en el tee-time
  registrarTurno(turnos: any, idturno: any): Observable<any> {
    //const headeres = new HttpHeaders({'Authorization':this.getToken+""});
    console.log(turnos);
    console.log(idturno);

    let token = this.getToken();
    return this.http.post(
      this.baseUrl + "/api/v1/tee-time/registrarTurno",
      { codigos_jugadores: turnos, codigo_turno: idturno },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      }
    );
  }

  ////// Metodo utilizado para listar las reservaciones en el tee-time
  listarRecervaciones(): Observable<any> {
    //const headeres = new HttpHeaders({'Authorization':this.getToken+""});

    let token = this.getToken();
    return this.http.post(
      this.baseUrl + "/api/v1/tee-time/obtenerReservacionesGolfista",
      { codigo_golfista: this.getCodGolfista },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      }
    );
  }
}
