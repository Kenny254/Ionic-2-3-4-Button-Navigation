import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular'; //Import NavController



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})


export class WelcomePage {

  constructor(public navCtrl: NavController) { } // Include it in the constructer


//Functions

  login() {
    this.navCtrl.push('LoginPage');
  }
   
  signup() {
    this.navCtrl.push('SignupPage');
  }
}
