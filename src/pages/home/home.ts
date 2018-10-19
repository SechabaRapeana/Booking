import { Component } from '@angular/core';
import { NavController, AlertController ,LoadingController  } from 'ionic-angular';
import { user } from '../../app/user';
import { DjPage} from '../../pages/dj/dj';
import { SignupPage} from '../../pages/signup/signup';
declare var firebase;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as user;
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {

  }

  sign(){

    this.navCtrl.setRoot(DjPage);




  }
  signIn() {


    if (this.user.email != undefined && this.user.password != undefined) {

      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
        var users = firebase.auth().currentUser.uid;
        
        firebase.database().ref("user/" ).set({
        })


        this.navCtrl.setRoot(DjPage);
        const loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 3000
        });
        loader.present();


      }, (error) => {
        var errormsg = error.message;

      })


    }

    // else {


    // }

  }


  signUp() {

    this.navCtrl.push(SignupPage);
  }
}
