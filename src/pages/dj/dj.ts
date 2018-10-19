import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewPage } from '../review/review';

/**
 * Generated class for the DjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dj',
  templateUrl: 'dj.html',
})
export class DjPage {
array = [];
image;
name;
profile;
i;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    

    this.array = [{name:"Da Capo",image:"../../assets/imgs/download.jpg",profile:"Nicodimas Sekheta Mogashoa best known among fans as “Da Capo” is a self-taught producer and DJ who first fell in love with house music at an early age enabling him to have a good ear for music"},
                    { name:"Enno Napa", image:"../../assets/imgs/download (1).jpg",profile:"Siphiwe Mkhize, better known as Enoo Napa, is a self taught producer from the township of Umlazi, Durban in KwaZulu Natal. After taking up production in 2013, his remix of Jackie Queen’s “Conqueror”, an ambient, dark afro sound with a hint of techy synths, caught the attention of Black Coffee in early 2015"},
                    { name:"Black Coffee", image:"../../assets/imgs/download (2).jpg",profile:"Nkosinathi Innocent Maphumulo (born 11 March 1976), better known by his stage name Black Coffee, is a South African DJ, record producer, singer and songwriter. He began his career around 1995 and has released five albums as well as a live DVD. Black Coffee had his big break shortly after being chosen as a participant in the 2004 Red Bull Music Academy held in Cape Town. In September 2015, he won the Breakthrough DJ of the Year award at the DJ Awards in Ibiza,a few weeks after the release of his fifth studio album, Pieces of Me"},
                    { name:"Julian Gomes", image:"../../assets/imgs/download (3).jpg",profile:"Jullian Gomes was born and grew up in the Republic of South Africa listening to Soul, Latin and kwaito before discovering House Music at the tender age of eight. Since his first gig in 2003, his career has traveled only upward, and his love for production and skill-set grew steadily with it. "},
                    { name:"Charles Webster", image:"../../assets/imgs/charles.jpg",profile:"Charles Webster is a British electronic music producer and DJ who specialises in producing house music, amongst several other genres, including downtempo and jazz. He has recorded under his own name as well as under a series of aliases including Presence, Furry Phreaks, and Love From San Francisco, and in collaboration with several other artists."}]

    console.log(this.array)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DjPage');
  }


  onClick(index){

   this.navCtrl.push(ReviewPage, {name:this.array[index].name})
 
  }
}
