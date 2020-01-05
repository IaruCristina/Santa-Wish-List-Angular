export class Santa {
    id: number;
    name: string;
    country: string;
    description: string;
    photo: string;
    song: string;
    wishlist = []; // Wishlist of gifts;
};

export class Gift {
    id: number;
    name: string;
    description: string;
    photo: string;
}

export class Tile {

    data: Santa;
    text: string;
    cols: number;
    rows: number;
    color: string;

    constructor(data: Santa, text: string, cols: number, rows: number, color: string) {
        this.data = data;
        this.text = text;
        this.cols = cols;
        this.rows = rows;
        this.color = color;
    }

}