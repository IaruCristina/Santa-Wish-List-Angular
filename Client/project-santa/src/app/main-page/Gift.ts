import { Gift } from '../santa/santa'

export class GiftItem {
    id: number;
    gift_link: Gift; //gift details
    name: string;
    price: string;

    public constructor (id: number, gift_link: Gift) {
        this.id = id;
        this.gift_link = gift_link;
        this.name = gift_link.name;
        this.price = gift_link.price;
    }
}