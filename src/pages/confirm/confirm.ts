import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
name = this.navParams.get('name')
date = this.navParams.get('date')
hour = this.navParams.get('hour')
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    console.log(this.date);
    console.log(this.name);
    console.log(this.hour);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  book(){
    const confirm = this.alertCtrl.create({
      title: 'Dj Booked',
      message: 'You have successfully booked '+this.name+ ' on ' +this.date + ' for ' +this.hour,
      buttons: [
     
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  }

