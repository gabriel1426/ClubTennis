import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the InstalacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-instalaciones",
  templateUrl: "instalaciones.html"
})
export class InstalacionesPage {
  instalaciones = [
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//a9687857015670ba25bb0ff3a852f6d3.jpg"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//79fd5f1443d54341f851b27878c2a7f6.jpg"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//2abf287a9d66d925e908c26c2a5650d7.jpg"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//5d61c38d972272db6211a1e0cf6cd881.jpg"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//dd1e63010a3a048dee54e710644ab0ba.jpg"
    }
  ];
  parques = [
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//imagenes//IMG_2472-3072x2048.jpg"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//imagenes//IMG_2518-1-3072x2048.jpg"
    }
  ];
  spa = [
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//b4174e2fe7077306eb5463fe29058ab2.jpg"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad InstalacionesPage");
  }
}
