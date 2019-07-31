import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the SugerenciaysaborPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sugerenciaysabor",
  templateUrl: "sugerenciaysabor.html"
})
export class SugerenciaysaborPage {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SugerenciaysaborPage");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
