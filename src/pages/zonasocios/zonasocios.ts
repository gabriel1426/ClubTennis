import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TeetimePage } from "../teetime/teetime";

/**
 * Generated class for the ZonasociosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-zonasocios",
  templateUrl: "zonasocios.html"
})
export class ZonasociosPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ZonasociosPage");
  }

  teeTime() {
    //console.log(evento);
    this.navCtrl.push(TeetimePage);
  }
}
