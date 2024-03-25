import { IceCreamTypes } from "../const";
import { ShopItem } from "../types/shopItem";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const noFatsItems: ShopItem[] = [
  {
    id: "65c5160b91ea1662c851c29b",
    name: "malinka",
    description: "creamy ice cream with raspberry jam",
    price: 3.1,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c519dd91ea1662c851c29d",
    name: "pistachio",
    description: "pistachio ice cream with chocolate pieces",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2e3",
    name: "watermelon",
    description: "refreshing watermelon sorbet",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  {
    id: "65c519dd91ea1662c851c29e",
    name: "blueberry",
    description: "creme brulee with blueberry jam",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c519dd91ea1662c851c29f",
    name: "bubble gum",
    description: "vanilla ice cream with sweet sprinkles",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.webp",
    fats: 13,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a0",
    name: "blackberry",
    description: "creamy ice cream with blackberry jam",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a1",
    name: "banana",
    description: "creamy ice cream with banana flavor",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a2",
    name: "chocolate",
    description: "classic chocolate ice cream",
    price: 2.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.webp",
    fats: 21,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a3",
    name: "strawberry",
    description: "creamy ice cream with strawberry flavor",
    price: 3,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a4",
    name: "lemon",
    description: "refreshing lemon sorbet",
    price: 3.1,
    img: process.env.PUBLIC_URL + "/img/shop/item-9.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  {
    id: "65c51b1e91ea1662c851c2a5",
    name: "menthol",
    description: "creamy ice cream with menthol syrup",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a6",
    name: "nut",
    description: "pistachio ice cream with chocolate syrup",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a7",
    name: "creme brulee",
    description: "classic creme brulee",
    price: 2.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a8",
    name: "coffee",
    description: "creamy ice cream with espresso flavor",
    price: 3.5,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2a9",
    name: "mango",
    description: "creamy ice cream with mango flavor",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2aa",
    name: "matcha",
    description: "green tea ice cream with matcha powder",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2ab",
    name: "cookies and cream",
    description: "vanilla ice cream with cookie pieces",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2ac",
    name: "raspberry sorbet",
    description: "refreshing raspberry sorbet",
    price: 3.1,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  {
    id: "65c51b1e91ea1662c851c2ad",
    name: "tiramisu",
    description: "creamy ice cream with tiramisu flavor",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2ae",
    name: "salted caramel",
    description: "creamy ice cream with salted caramel swirls",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2af",
    name: "hazelnut",
    description: "creamy ice cream with hazelnut flavor",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b0",
    name: "vanilla bean",
    description: "classic vanilla bean ice cream",
    price: 2.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-9.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b1",
    name: "red velvet",
    description: "creamy ice cream with red velvet cake chunks",
    price: 3.5,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b2",
    name: "coconut",
    description: "creamy ice cream with coconut flakes",
    price: 3.1,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b3",
    name: "peach",
    description: "creamy ice cream with peach flavor",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b4",
    name: "raspberry cheesecake",
    description: "creamy ice cream with raspberry swirls and cheesecake pieces",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b5",
    name: "mint chocolate chip",
    description: "mint flavored ice cream with chocolate chips",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b6",
    name: "peanut butter cup",
    description: "creamy ice cream with peanut butter cups",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2e5",
    name: "mango",
    description: "exotic mango sorbet",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  {
    id: "65c51b1e91ea1662c851c2b7",
    name: "rocky road",
    description: "chocolate ice cream with marshmallows and nuts",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b8",
    name: "butter pecan",
    description: "butter pecan flavored ice cream with pecan nuts",
    price: 3.5,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2b9",
    name: "salted caramel brownie",
    description: "creamy ice cream with salted caramel and brownie chunks",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2ba",
    name: "cherry garcia",
    description: "cherry flavored ice cream with chocolate chunks and cherries",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2e2",
    name: "strawberry",
    description: "delicious strawberry sorbet",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  {
    id: "65c51b1e91ea1662c851c2bb",
    name: "cotton candy",
    description: "cotton candy flavored ice cream with colorful sprinkles",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2bc",
    name: "lavender",
    description: "lavender infused ice cream with honey",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2bd",
    name: "maple walnut",
    description: "maple flavored ice cream with walnuts",
    price: 3.5,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2be",
    name: "s'mores",
    description: "chocolate ice cream with marshmallows and graham cracker pieces",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2bf",
    name: "cinnamon roll",
    description: "creamy ice cream with cinnamon swirls",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c0",
    name: "neapolitan",
    description: "strawberry, chocolate, and vanilla ice cream",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c1",
    name: "mocha almond fudge",
    description: "coffee flavored ice cream with almonds and fudge",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c2",
    name: "pistachio almond",
    description: "pistachio flavored ice cream with almond pieces",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c3",
    name: "strawberry cheesecake",
    description: "creamy ice cream with strawberry swirls and cheesecake pieces",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c4",
    name: "peach cobbler",
    description: "peach flavored ice cream with cobbler crumbles",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c5",
    name: "chocolate fudge brownie",
    description: "chocolate ice cream with fudge swirls and brownie chunks",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c6",
    name: "key lime pie",
    description: "creamy ice cream with key lime flavor and graham cracker pieces",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c7",
    name: "toasted marshmallow",
    description: "marshmallow flavored ice cream with toasted marshmallow swirls",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c8",
    name: "apple pie",
    description: "apple flavored ice cream with pie crust pieces",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-9.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2c9",
    name: "peanut butter banana",
    description: "creamy ice cream with peanut butter and banana flavor",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2e4",
    name: "pineapple",
    description: "tropical pineapple sorbet",
    price: 3.5,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  {
    id: "65c51b1e91ea1662c851c2ca",
    name: "black forest",
    description: "chocolate ice cream with cherry pieces and chocolate chunks",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2cb",
    name: "butterfinger",
    description: "creamy ice cream with butterfinger candy pieces",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2cc",
    name: "cookies 'n cream",
    description: "vanilla ice cream with oreo cookie pieces",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2cd",
    name: "mint oreo",
    description: "mint flavored ice cream with oreo cookie pieces",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2ce",
    name: "pumpkin spice",
    description: "pumpkin flavored ice cream with spices",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2cf",
    name: "caramel swirl",
    description: "creamy ice cream with caramel swirls",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d0",
    name: "chocolate chip cookie dough",
    description: "vanilla ice cream with chunks of chocolate chip cookie dough",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d1",
    name: "rainbow sherbet",
    description: "assorted fruit flavored sherbet",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d2",
    name: "mango tango",
    description: "mango flavored ice cream with a hint of lime",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d3",
    name: "caramel macchiato",
    description: "coffee flavored ice cream with caramel swirls",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d4",
    name: "cotton candy explosion",
    description: "cotton candy flavored ice cream with popping candy",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-9.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d5",
    name: "nutella swirl",
    description: "creamy ice cream with swirls of nutella",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d6",
    name: "mint mojito",
    description: "mint flavored ice cream with a hint of lime and rum",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d7",
    name: "blue moon",
    description: "blue colored ice cream with fruity flavors",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d8",
    name: "honey lavender",
    description: "honey flavored ice cream with lavender infusion",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2d9",
    name: "cinnamon toast crunch",
    description: "cinnamon flavored ice cream with pieces of cinnamon toast crunch cereal",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2da",
    name: "horchata",
    description: "horchata flavored ice cream with cinnamon and rice milk",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2db",
    name: "cookie dough blizzard",
    description: "vanilla ice cream with chunks of cookie dough and chocolate fudge",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2dc",
    name: "cherry almond",
    description: "cherry flavored ice cream with almond slices",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2dd",
    name: "mocha chip",
    description: "coffee flavored ice cream with chocolate chips",
    price: 3.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2de",
    name: "almond joy",
    description: "coconut flavored ice cream with almond pieces and chocolate chunks",
    price: 3.9,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2df",
    name: "pina colada",
    description: "pineapple and coconut flavored ice cream",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2e0",
    name: "chocolate hazelnut",
    description: "chocolate ice cream with hazelnut pieces",
    price: 3.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-9.webp",
    fats: 10,
    type: IceCreamTypes.Creamy
  },
  {
    id: "65c51b1e91ea1662c851c2e1",
    name: "orange",
    description: "zingy orange sorbet",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.webp",
    fats: 10,
    type: IceCreamTypes.Sorbet
  },
  
]
export const shopItems = noFatsItems.map(item => {
  let fatsRange = [8, 42];
  
  if (item.type === IceCreamTypes.Sorbet) {
    fatsRange = [0, 3];
  }
  
  return {
    ...item,
    fats: getRandomInt(fatsRange[0], fatsRange[1])
  };
});
