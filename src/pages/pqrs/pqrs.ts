import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the PqrsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-pqrs",
  templateUrl: "pqrs.html"
})
export class PqrsPage {
  myForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public proveedor: ServiciosProvider
  ) {
    this.myForm = this.fb.group({
      asunto: ["", [Validators.required]],
      mensaje: ["", [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PqrsPage");
  }

  saveData() {
    this.proveedor.savePqrs(this.myForm).subscribe(data => {
      console.log(data);
    });
  }
}
