import { v4 as uuid } from 'uuid';
const randomFloat = require('random-float');

const Data = [{
        "id": uuid(),
        "item": "Candy Canes",
        "price": Math.round(randomFloat(10), 2),
        "description": "This canes are not for old people.",
        "image": "GiCandyCanes"
    },
    {
        "id": uuid(),
        "item": "Gingerbread Man",
        "price": Math.round(randomFloat(10), 2),
        "description": "Do you know the muffin man?",
        "image": "GiGingerbreadMan"
    }, {
        "id": uuid(),
        "item": "Milk",
        "price": Math.round(randomFloat(10), 2),
        "description": "Cow goes moo",
        "image": "GiMilkCarton"

    }, {
        "id": uuid(),
        "item": "Apple",
        "price": Math.round(randomFloat(10), 2),
        "description": "How do you like them apples?",
        "image": "GiShinyApple"
    }, {
        "id": uuid(),
        "item": "Pear",
        "price": Math.round(randomFloat(10), 2),
        "description": "Pearfect",
        "image": "GiPear"
    }, {
        "id": uuid(),
        "item": "Egg",
        "price": Math.round(randomFloat(10), 2),
        "description": "Sorry no bacon.",
        "image": "GiBigEgg"
    }, {
        "id": uuid(),
        "item": "Bagguette",
        "price": Math.round(randomFloat(10), 2),
        "description": "Fresh bagguette",
        "image": "GiBread"
    }, {
        "id": uuid(),
        "item": "Banana",
        "price": Math.round(randomFloat(10), 2),
        "description": "One banana",

        "image": "GiBanana"
    }, {
        "id": uuid(),
        "item": "Basketball ball",
        "price": Math.round(randomFloat(10), 2),
        "description": "Ball for basketball",

        "image": "GiBasketballBall"
    }, {
        "id": uuid(),
        "item": "Boomerang",
        "price": Math.round(randomFloat(10), 2),
        "description": "If you throw it, it comes back",
        "image": "GiBoomerang"
    },
    {
        "id": uuid(),
        "item": "Carrot",
        "price": Math.round(randomFloat(10), 2),
        "description": "Eh, What's up Doc?",
        "image": "GiCarrot"
    }, {
        "id": uuid(),
        "item": "Diamond",
        "price": Math.round(randomFloat(10), 2),
        "description": "They aren't forever",
        "image": "GiCutDiamond"

    }, {
        "id": uuid(),
        "item": "Hourglass",
        "price": Math.round(randomFloat(10), 2),
        "description": "How do you put an hour in a glass?",
        "image": "GiHourglass"
    }, {
        "id": uuid(),
        "item": "House",
        "price": Math.round(randomFloat(10), 2),
        "description": "Do you think it's a real house?",
        "image": "GiHouse"
    }, {
        "id": uuid(),
        "item": "Metronome",
        "price": Math.round(randomFloat(10), 2),
        "description": "It goes tick-tock.",
        "image": "GiMetronome"
    }, {
        "id": uuid(),
        "item": "Peach",
        "price": Math.round(randomFloat(10), 2),
        "description": "For hot summer days",
        "image": "GiPeach"
    }, {
        "id": uuid(),
        "item": "Pineapple",
        "price": Math.round(randomFloat(10), 2),
        "description": "How do you like them (pine)apples",

        "image": "GiPineapple"
    }, {
        "id": uuid(),
        "item": "Pizza cutter",
        "price": Math.round(randomFloat(10), 2),
        "description": "You need it.",

        "image": "GiPizzaCutter"
    }
]

export default Data