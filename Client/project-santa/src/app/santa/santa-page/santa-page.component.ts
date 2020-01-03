import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Santa } from "../santa"
import { SANTA_LIST } from "../santa-list"

@Component({
  selector: 'app-santa-page',
  templateUrl: './santa-page.component.html',
  styleUrls: ['./santa-page.component.css']
})
export class SantaPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: number
  santa: Santa

  ngOnInit() {

    /* Get the id as a integer */
    this.id = parseInt(this.route.snapshot.paramMap.get("id")) 

    /* Search the id in the list of santas */
    this.santa = SANTA_LIST.find(santa => santa.id === this.id)

    console.log(this.santa.name)
  }

}
