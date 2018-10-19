import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

name = this.navParams.get('name')
hour;
date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.name);
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
   
  }


  toConfirn(){
    this.navCtrl.push(ConfirmPage, {name:this.name, date:this.date, hour:this.hour})
  }
}
