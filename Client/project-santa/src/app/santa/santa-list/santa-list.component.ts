import { Component, OnInit, Inject } from '@angular/core';
import { SANTA_LIST, GIFT_DICT, GIFT_SHOPPING_LIST } from '../santa-list';
import { Santa, Tile, Gift } from '../santa';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  wishlist: [];
}

@Component({
  selector: 'app-santa-list',
  templateUrl: './santa-list.component.html',
  styleUrls: ['./santa-list.component.css', '../custom-santa-button.css']
})
export class SantaListComponent implements OnInit {

  data = SANTA_LIST
  tiles = [] // Tile list for showing 

  selection: string

  constructor(public dialog: MatDialog) { }

  openDialog(santa: Santa): void {

    console.log(santa.wishlist)
    var giftList = []
    santa.wishlist.forEach(gift => {
      giftList.push([gift.id, gift.name])
    });

    const dialogRef = this.dialog.open(SantaGiftDialog, {
      width: '250px',
      data: { wishlist: giftList }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selection = result;
      console.log('Dialog closed for santa', this.selection);
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

  /* Is it checked? In cart */
  isChecked(value) {
    for (let key in GIFT_DICT) {
      let gift = GIFT_DICT[key];

      /* Is it a this item? */
      if (gift.id === value[0]) {

        /* Find it */
        const index = GIFT_SHOPPING_LIST.indexOf(gift, 0);
        return (index <= -1 ? false : true);
      }
    }

    /* Not found */
    return false;
  }


  /* Checkbox gets toggled */
  toggle(event: any, value: any) {

    // console.log(event, value)
    for (let key in GIFT_DICT) {
      let gift = GIFT_DICT[key];

      /* Is it a this item? */
      if (gift.id === value[0]) {

        /* Add it */
        const index = GIFT_SHOPPING_LIST.indexOf(gift, 0);
        if (index <= -1) {
          if (event.checked) {
            console.log("Pushed gift into SHOPPING_LIST", gift.id)
            GIFT_SHOPPING_LIST.push(gift)
          }
        } else if (!event.checked) {
          GIFT_SHOPPING_LIST.splice(index, 1);
          console.log("Removed gift from SHOPPING_LIST", gift.id)
        }
      }
    }
  }

  constructor(
    public dialogRef: MatDialogRef<SantaGiftDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}