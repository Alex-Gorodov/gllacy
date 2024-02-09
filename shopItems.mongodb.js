/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('shopItems').insertMany([{
    "_id": {
      "$oid": "65c5160b91ea1662c851c29b"
    },
    "name": "Malinka",
    "description": "Creamy ice cream with raspberry jam",
    "price": 3.1
  },
  {
    "_id": {
      "$oid": "65c519dd91ea1662c851c29d"
    },
    "name": "Pistachio",
    "description": "Pistachio ice cream with chocolate pieces",
    "price": 3.4
  },
  {
    "_id": {
      "$oid": "65c519dd91ea1662c851c29e"
    },
    "name": "Blueberry",
    "description": "Creme brulee with blueberry jam",
    "price": 3.3
  },
  {
    "_id": {
      "$oid": "65c519dd91ea1662c851c29f"
    },
    "name": "Bubble gum",
    "description": "Vanilla ice cream with sweet sprinkles",
    "price": 3.2
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a0"
    },
    "name": "Blackberry",
    "description": "Creamy ice cream with blackberry jam",
    "price": 3.3
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a1"
    },
    "name": "Banana",
    "description": "Creamy ice cream with banana flavor",
    "price": 3.4
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a2"
    },
    "name": "Chocolate",
    "description": "Classic chocolate ice cream",
    "price": 2.7
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a3"
    },
    "name": "Strawberry",
    "description": "Creamy ice cream with strawberry flavor",
    "price": 3
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a4"
    },
    "name": "Lemon",
    "description": "Refreshing lemon sorbet",
    "price": 3.1
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a5"
    },
    "name": "Menthol",
    "description": "Creamy ice cream with menthol syrup",
    "price": 3.2
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a6"
    },
    "name": "Nut",
    "description": "Pistachio ice cream with chocolate syrup",
    "price": 3.6
  },
  {
    "_id": {
      "$oid": "65c51b1e91ea1662c851c2a7"
    },
    "name": "Creme brulee",
    "description": "Classic creme brulee",
    "price": 2.8
  }]);
