import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

import { SugerenciaysaborPage } from "../sugerenciaysabor/sugerenciaysabor";
import { DetalleeventoPage } from "../detalleevento/detalleevento";

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-restaurant",
  templateUrl: "restaurant.html"
})
export class RestaurantPage {
  restaurantes = [
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//abc4c250a007b35434a22a497e64e5fc.jpg",
      titulo: "Taberna Club"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//imagenes//IMG_2570-1024x683.jpg",
      titulo: "Cafeteria"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//369ac7e400dfc8290c0efd8b252dbd9f.jpg",
      titulo: "Restaurante Hoyo 19"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//e329f9e82ceff3e0724a5cd0c5450802.jpg",
      titulo: "Restaurante Club"
    },
    {
      url:
        "http://administrativo.tennisgolfclub.com.co//pages//tables//img//bcbf1f4b3f51ae4b4195d8f07991e78a.jpg",
      titulo: "Pizzería Club Tennis"
    }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RestaurantPage");
  }

  sugerenciaysaborModal() {
    let modal1 = this.modalCtrl.create(SugerenciaysaborPage);
    modal1.present();
  }
  abrirtdetalleevento() {
    this.navCtrl.push(DetalleeventoPage);
  }
}
