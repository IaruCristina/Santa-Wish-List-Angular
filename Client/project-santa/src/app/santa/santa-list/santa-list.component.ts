import { Component, OnInit } from '@angular/core';
import { SANTA_LIST } from '../santa-list';
import { Santa, Tile } from '../santa';
import { TitleCasePipe } from '@angular/common';

// import { Http, ResponseContentType } from '@angular/http';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-santa-list',
  templateUrl: './santa-list.component.html',
  styleUrls: ['./santa-list.component.css']
})

export class SantaListComponent implements OnInit {

  data = SANTA_LIST
  tiles = [] // Tile list for showing 

  constructor() { }
  //constructor(private http: Http) { }

  //getImage(imageUrl: string): Observable<File> {
  //  let headers = { responseType: ResponseContentType.Blog }
  //  return this.http
  //    .get(imageUrl, headers)
  //    .map((res: Response) => res.blob());
  //}

  getMeta(url: string) {
    var img = new Image();
    img.addEventListener("load", function () {
      alert(this.naturalWidth + ' ' + this.naturalHeight);
    });
    img.src = url;
  }

  ngOnInit() {

    /* Dynamically load the tile data */
    for (let santa of this.data) [
      
      this.tiles.push(new Tile(santa, santa.name, 1, 1, 'lightblue')) // TODO: figure out aspect ratio of image and decide how many rows/cols it's gonna occupy
    ]
  }

}
