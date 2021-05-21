import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";


@IonicPage()
@Component({
  selector: 'page-single-trait',
  templateUrl: 'single-trait.html',
})
export class SingleTraitPage {

  traits: trait[] = [];
  firstTraitsCopyArray: trait[] = [];
  secondTraitsCopyArray: trait[] = [];
  firstTraitPrimaryParent : trait;
  secondTraitPrimaryParent : trait;
  thirdTraitPrimaryParent : trait;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {

      this.traits = [
          {
              'id': 1,
              'name': 'trait.activ',
              'conflict' : [28]
          },
          {
              'id': 2,
              'name': 'trait.ambitious',
              'conflict' : [28]
          },
          {
              'id': 3,
              'name': 'trait.art-lover',
              'conflict' : []
          },
          {
              'id': 4,
              'name': 'trait.bookworm',
              'conflict' : []
          },
          {
              'id': 5,
              'name': 'trait.bro',
              'conflict' : []
          },
          {
              'id': 6,
              'name': 'trait.cat-lover',
              'conflict' : []
          },
          {
              'id': 7,
              'name': 'trait.cheerful',
              'conflict' : [19, 24]
          },
          {
              'id': 8,
              'name': 'trait.childish',
              'conflict' : [14, 23, 40]
          },
          {
              'id': 9,
              'name': 'trait.clumsy',
              'conflict' : []
          },
          {
              'id': 10,
              'name': 'trait.creative',
              'conflict' : []
          },
          {
              'id': 11,
              'name': 'trait.dance-machine',
              'conflict' : []
          },
          {
              'id': 12,
              'name': 'trait.dog-lover',
              'conflict' : []
          },
          {
              'id': 13,
              'name': 'trait.erratic',
              'conflict' : []
          },
          {
              'id': 14,
              'name': 'trait.evil',
              'conflict' : [8, 21]
          },
          {
              'id': 15,
              'name': 'trait.family-oriented',
              'conflict' : [23, 35]
          },
          {
              'id': 16,
              'name': 'trait.foodie',
              'conflict' : [20]
          },
          {
              'id': 17,
              'name': 'trait.geek',
              'conflict' : []
          },
          {
              'id': 18,
              'name': 'trait.genius',
              'conflict' : []
          },
          {
              'id': 19,
              'name': 'trait.gloomy',
              'conflict': [7, 24]
          },
          {
              'id': 20,
              'name': 'trait.glutton',
              'conflict' : [16, 42]
          },
          {
              'id': 21,
              'name': 'trait.good',
              'conflict' : [14, 27, 32]
          },
          {
              'id': 22,
              'name': 'trait.goofball',
              'conflict' : [41]
          },
          {
              'id': 23,
              'name': 'trait.hates-children',
              'conflict' : [8, 15]
          },
          {
              'id': 24,
              'name': 'trait.hot-heated',
              'conflict' : [7, 19]
          },
          {
              'id': 25,
              'name': 'trait.insider',
              'conflict' : [29]
          },
          {
              'id': 26,
              'name': 'trait.jealous',
              'conflict' : []
          },
          {
              'id': 27,
              'name': 'trait.kleptomanic',
              'conflict' : [21]
          },
          {
              'id': 28,
              'name': 'trait.lazy',
              'conflict' : [1, 2, 34]
          },
          {
              'id': 29,
              'name': 'trait.loner',
              'conflict' : [25, 36]
          },
          {
              'id': 30,
              'name': 'trait.loves-outdoors',
              'conflict' : [42]
          },
          {
              'id': 31,
              'name': 'trait.materialistic',
              'conflict' : []
          },
          {
              'id': 32,
              'name': 'trait.mean',
              'conflict' : [21]
          },
          {
              'id': 33,
              'name': 'trait.music-lover',
              'conflict' : []
          },
          {
              'id': 34,
              'name': 'trait.neat',
              'conflict' : [28, 40]
          },
          {
              'id': 35,
              'name': 'trait.noncommittal',
              'conflict' : [15]
          },
          {
              'id': 36,
              'name': 'trait.outgoing',
              'conflict' : [29]
          },
          {
              'id': 37,
              'name': 'trait.perfectionist',
              'conflict' : []
          },
          {
              'id': 38,
              'name': 'trait.romantic',
              'conflict': [43]
          },
          {
              'id': 39,
              'name': 'trait.self-assured',
              'conflict' : []
          },
          {
              'id': 40,
              'name': 'trait.slob',
              'conflict' : [34, 42]
          },
          {
              'id': 41,
              'name': 'trait.snob',
              'conflict' : [8, 22]
          },
          {
              'id': 42,
              'name': 'trait.squeamish',
              'conflict' : [20, 30]
          },
          {
              'id': 43,
              'name': 'trait.unflirty',
              'conflict' : [38]
          },
          {
              'id': 44,
              'name': 'trait.vegetarian',
              'conflict' : []
          }
      ];

  }

  onChangeFirstArray(){
      this.firstTraitsCopyArray = this.traits.filter(value => {
          let hasConflict =
              this.firstTraitPrimaryParent.conflict.indexOf(value.id) > -1;
          let isAlreadySelected = value.id == this.firstTraitPrimaryParent.id;
          let included = !isAlreadySelected && !hasConflict;
          if (!included) {
              console.log('filtered: ' + value.id + ' ' + value.name);
          }
          return included;
      });
    console.log(this.firstTraitsCopyArray);
    return this.firstTraitsCopyArray;
  }

  onChangeSecondArray(){
      console.log(this.firstTraitsCopyArray);

      this.secondTraitsCopyArray = this.firstTraitsCopyArray.filter( value => {
          
      })

      /*this.secondTraitsArray = this.traitsArray.filter( value => {
          let hasConflict =
              this.secondTraitPrimaryParent.conflict.indexOf(value.id) > -1;
          let isAlreadySelected = value.id == this.secondTraitPrimaryParent.id;
          let included = !isAlreadySelected && !hasConflict;
          if (!included) {
              console.log('filtered: ' + value.id + ' ' + value.name);
          }
          return included;
      });
      console.log(this.secondTraitsArray);
      return this.secondTraitsArray;*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleTraitPage');
  }


}

interface trait {
    id: number,
    name: string,
    conflict: number[]
}
