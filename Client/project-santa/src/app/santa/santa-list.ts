import { Santa, Gift } from './santa'

/* GIFT_LIST */
const GIFT_LIST: Gift[] = [
    { id: 0, name: 'Chocolate Bar', description: 'Russians celebrate Christmas on January 6th and the holiday is perceived only as a holy day when people go to church and spend the day with kind thoughts. Christmas is celebrated with family members and at home.', photo: 'https://i.imgur.com/GAaOEL8.png', price: '5 lei' },
    { id: 1, name: 'Christmas Book', description: 'Heal your mind with a great book!', photo: 'https://i.imgur.com/p8zArz1.png', price: '30 de lei' },
    { id: 2, name: 'Christmas Movie', description: 'Movie time and a cup of tea! Best night', photo: 'https://i.imgur.com/2GanmKY.png', price: '50 de lei' },
    { id: 3, name: 'Food', description: 'Healthy and Delicious!', photo: 'https://i.imgur.com/JhXHZal.png', price: '100 de lei' }
]

export const GIFT_SHOPPING_LIST: Gift[] = []

export const GIFT_DICT = {
    'Chocolate Bar': GIFT_LIST[0],
    'Christmas Book': GIFT_LIST[1],
    'Christmas Movie': GIFT_LIST[2],
    'Food': GIFT_LIST[3]
}
GIFT_DICT['']

/* SANTA_LIST - instead of excel file */
export const SANTA_LIST: Santa[] = [
    { id: 0, name: 'Father Christmas', country: 'United Kingdom', description: 'the traditional British Father Christmas wears a hooded green cloak, a wreath of holly or ivy, and carries a staff.', photo: 'https://i.imgur.com/OmIQTCy.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar'], GIFT_DICT['Christmas Book'], GIFT_DICT['Christmas Movie'], GIFT_DICT['Food']] },
    { id: 1, name: 'Père Noël', country: 'France', description: 'He wears a long red cloak instead of a red suit, and children leave their shoes by the fireplace hoping that they will be filled with goodies after mass on Christmas Eve.', photo: 'https://i.imgur.com/ni2As0F.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar'], GIFT_DICT['Christmas Book']] },
    { id: 2, name: 'Ded Moroz', country: 'Russia', description: 'Traditionally, he would punish naughty children by kidnapping them, but this darker part of Ded Moroz.s personality has softened over the years.', photo: 'https://i.imgur.com/kmTUTqY.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar'], GIFT_DICT['Christmas Book'],GIFT_DICT['Christmas Movie']] },
    { id: 3, name: 'Tomte', country: 'Sweden', description: 'Traditionally a dwarf-like being with the appearance of a garden gnome, the tomte guards farmhouses from bad luck. ', photo: 'https://i.imgur.com/NJbcsPf.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar'], GIFT_DICT['Christmas Book'],GIFT_DICT['Food']] },
    { id: 4, name: 'Julenissen', country: 'Norway', description: 'Julenisse wears grey clothes and usually has a grey beard instead of a white one.', photo: 'https://i.imgur.com/K1y2FKq.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar']] },
    { id: 5, name: 'Mos Craciun', country: 'Romania', description: 'The REAL Santa', photo: 'https://i.imgur.com/Rw3rdov.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar'], GIFT_DICT['Christmas Movie']] },
    { id: 6, name: 'Sinterklaas', country: 'The Netherlands', description: 'Sinterklaas comes riding into town on a white horse, wearing a tall, red bishop.s hat and a jeweled staff. ', photo: 'https://i.imgur.com/UTTcfh4.jpg', song: 'None', wishlist: [ GIFT_DICT['Christmas Book']] },
    { id: 7, name: 'Christkind', country: 'Austria', description: 'Christkind or "Christ Child" is the benevolent (usually female) gift-bringer who leaves presents for good children on Christmas Eve, much like her more famous counterpart, Santa Claus.', photo: 'https://i.imgur.com/JhfTkgH.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar'], GIFT_DICT['Christmas Book'], GIFT_DICT['Christmas Movie'], GIFT_DICT['Food']] },
    { id: 8, name: 'Los Reyes Magos', country: 'Spain', description: 'In Spain, good children are not only visited by one, but three jolly figures who disseminate presents on El Dia De Reyes, the day that the three wise men (or magi) finally reached baby Jesus on January 6.', photo: 'https://i.imgur.com/1xKyI08.jpg', song: 'None', wishlist: [GIFT_DICT['Chocolate Bar']] }
];

