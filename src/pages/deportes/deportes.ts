import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-deportes",
  templateUrl: "deportes.html"
})
export class DeportesPage {
  deportes = [
    {
      url: "../../assets/imgs/Tennis.jpg",
      titulo: "Tennis"
    },
    {
      url: "../../assets/imgs/gym.jpg",
      titulo: "Gimnasio"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//0af0f79eb185d9f88c85d15e01eb2f85.jpg",
      titulo: "Golf"
    },
    {
      url: "../../assets/imgs/Baloncesto.jpg",
      titulo: "Baloncesto"
    },
    {
      url: "../../assets/imgs/natacion.jpg",
      titulo: "Natación"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DeportesPage");
  }
}
