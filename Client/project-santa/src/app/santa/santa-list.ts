import { Santa, Gift } from './santa'

/* GIFT_LIST */
const GIFT_LIST: Gift[] = [
    { id: 0, name: 'Charcoal', description: 'Someone\'s been naughty..', photo: 'https://cutt.ly/SrueCtF' },
    { id: 1, name: 'Red Apples', description: 'Healthy and delicious!', photo: 'https://cutt.ly/SrueCtF' }
]

export const GIFT_SHOPPING_LIST: Gift[] = []

export const GIFT_DICT = {
    'Charcoal': GIFT_LIST[0],
    'Red Apples': GIFT_LIST[1]
}

/* SANTA_LIST - instead of excel file */
export const SANTA_LIST: Santa[] = [
    { id: 0, name: 'Father Christmas', country: 'United Kingdom', description: 'the traditional British Father Christmas wears a hooded green cloak, a wreath of holly or ivy, and carries a staff.', photo: 'https://cutt.ly/druePVT', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 1, name: 'Père Noël', country: 'France', description: 'He wears a long red cloak instead of a red suit, and children leave their shoes by the fireplace hoping that they will be filled with goodies after mass on Christmas Eve.', photo: 'https://cutt.ly/urueHqX', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 2, name: 'Ded Moroz', country: 'Russia', description: 'Traditionally, he would punish naughty children by kidnapping them, but this darker part of Ded Moroz.s personality has softened over the years.', photo: 'https://cutt.ly/1rueHGH', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 3, name: 'Tomte', country: 'Sweden', description: 'Traditionally a dwarf-like being with the appearance of a garden gnome, the tomte guards farmhouses from bad luck. ', photo: 'https://cutt.ly/krueKmy', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 4, name: 'Julenissen', country: 'Norway', description: 'Julenisse wears grey clothes and usually has a grey beard instead of a white one.', photo: 'https://cutt.ly/QrueZVz', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 5, name: 'Mos Craciun', country: 'Romania', description: 'The REAL Santa', photo: 'https://cutt.ly/SrueCtF', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 6, name: 'Sinterklaas', country: 'The Netherlands', description: 'Sinterklaas comes riding into town on a white horse, wearing a tall, red bishop.s hat and a jeweled staff. ', photo: 'https://cutt.ly/srurvtM', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 7, name: 'Christkind', country: 'Austria', description: 'Christkind or "Christ Child" is the benevolent (usually female) gift-bringer who leaves presents for good children on Christmas Eve, much like her more famous counterpart, Santa Claus.', photo: 'https://cutt.ly/hrurb7X', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] },
    { id: 8, name: 'Los Reyes Magos', country: 'Spain', description: 'In Spain, good children are not only visited by one, but three jolly figures who disseminate presents on El Dia De Reyes, the day that the three wise men (or magi) finally reached baby Jesus on January 6.', photo: 'https://cutt.ly/HrurWWP', song: 'None', wishlist: [GIFT_DICT['Charcoal'], GIFT_DICT['Red Apples']] }
];

