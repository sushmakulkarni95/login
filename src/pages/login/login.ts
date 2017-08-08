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

         private deviceDetails = "";
    populateDeviceDetails() {
        var device:Device = (<any>window).device;
        
        
        this.deviceDetails = "";
        this.deviceDetails += "<br/>Cordova:" + device.cordova;
        this.deviceDetails += "<br/>model:" + device.model;
        this.deviceDetails += "<br/>platform:" + device.platform;
        this.deviceDetails += "<br/>uuid:" + device.uuid;
        this.deviceDetails += "<br/>version:" + device.version;
        this.deviceDetails +=
        "<br/>manufacturer:" + device.manufacturer;
        this.deviceDetails += "<br/>isVirtual:" + device.isVirtual;
        this.deviceDetails += "<br/>serial:" + device.serial;


  
  
    }
}
  
     
   
     
   







