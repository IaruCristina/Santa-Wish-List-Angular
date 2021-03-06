import { Component, OnInit } from '@angular/core';
import { GIFT_SHOPPING_LIST } from '../santa/santa-list';
import { GiftItem } from 'src/app/main-page/Gift';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

//
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  giftList = []
  selectedGift: GiftItem;

  constructor() { 
  }

  ngOnInit() {
    let id = 0;
    for (let gift of GIFT_SHOPPING_LIST) [
      this.giftList.push(new GiftItem(id, gift)),
      ++id
    ]
  }

  onSelect(currentGift: GiftItem): void {
    this.selectedGift = currentGift;
  }

}

export class StepperVerticalExample implements OnInit {
  isLinear = false;
  firstFormGroup : FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
 
  ngOnInit() {
    
    this.firstFormGroup = new FormGroup({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

/*

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

*/