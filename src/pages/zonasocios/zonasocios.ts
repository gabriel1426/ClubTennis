import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TeetimePage } from "../teetime/teetime";

/**
 * Generated class for the ZonasociosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: "page-zonasocios",
  templateUrl: "zonasocios.html"
})
export class ZonasociosPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.localStorage.removeItem("nav");
    window.localStorage.setItem("nav", "ZonasociosPage");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ZonasociosPage");
  }

  teeTime() {
    //console.log(evento);
    this.navCtrl.push(TeetimePage);
  }
}
