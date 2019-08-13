import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    public fb: FormBuilder
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
    alert(JSON.stringify(this.myForm.value));
  }
}
