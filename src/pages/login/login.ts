import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { RegisterPage } from '../Register/Register';
@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(public navCtrl: NavController) {
    
   

  }
  login(){
     this.navCtrl.push(LoginPage);
      
  }
  register(){
    this.navCtrl.push(RegisterPage);

  }

    
}
  
     
   
     
   







