# Ionic-2-3-4-Button-Navigation
Quick procedure to implement button navigation using typescript. 

PROCEDURES.

1.Add button wiht a fucntion 'signup()'n welcome page to call a function in welcome.ts file.

      <button ion-button block (click)="signup()">SIGN UP</button>
 
2.Make sure you have imported 'NavController' in welcome.ts.

       import { IonicPage, NavController } from 'ionic-angular';

3.Also include 'public navCtrl: NavController' in  the contructor. 
       
       constructor(public navCtrl: NavController) { }
       
4.In the file welcome.ts, add a function handler to redirect you to your desired page.
     
        signup() {
    this.navCtrl.push('SignupPage');
  }
  
NB.
Ideally you create an exit point and entry point.

