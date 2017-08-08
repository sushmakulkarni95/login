import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'Register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
   register(){
    this.navCtrl.push(RegisterPage);
  

   }
}
