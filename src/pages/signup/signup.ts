import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../../app/user'
import {DjPage} from '../dj/dj'
declare var firebase;

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as user ;

  FirstName ;
  lastName ;
  phoneNumber ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp(user:user){
    firebase.auth().createUserWithEmailAndPassword( user.email, user.password).then(()=> {
    var users= firebase.auth().currentUser;
    firebase.database().ref("user/"+ users.uid).set({
     name: this.FirstName ,
     surname: this.lastName ,
     phone: this.phoneNumber

    })
    
    this.navCtrl.push(DjPage);
    } , (error)=>{
      var errormsg = error.message;
     

  })
}




}
