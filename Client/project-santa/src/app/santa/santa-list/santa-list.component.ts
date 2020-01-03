import { Component, OnInit, Inject } from '@angular/core';
import { SANTA_LIST } from '../santa-list';
import { Santa, Tile } from '../santa';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  wishlist: [];
}

@Component({
  selector: 'app-santa-list',
  templateUrl: './santa-list.component.html',
  styleUrls: ['./santa-list.component.css']
})
export class SantaListComponent implements OnInit {

  data = SANTA_LIST
  tiles = [] // Tile list for showing 

  selection: string

  constructor(public dialog: MatDialog) { }

  openDialog(santa: Santa): void {

    console.log(santa.wishlist)

    const dialogRef = this.dialog.open(SantaGiftDialog, {
      width: '250px',
      data: { wishlist: santa.wishlist }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed for santa');
      this.selection = result;
    });
  }

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

@Component({
  selector: 'santa-gift-dialog',
  templateUrl: 'santa-gift-dialog.html'
})
export class SantaGiftDialog {

  constructor(
    public dialogRef: MatDialogRef<SantaGiftDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}