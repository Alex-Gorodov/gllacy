// import { MongoClient, ServerApiVersion } from "mongodb";

export enum AppRoute {
  Root = '/gllacy/',
  Catalog = '/gllacy/catalog',
  Shipping = '/gllacy/shipping',
  About = '/gllacy/about',
  Blog = '/gllacy/blog',
}

export enum BackgroundColors {
  firstSlide = '#feafc3',
  secondSlide = '#69a9ff',
  thirdSlide = '#fcc850'
}


// // const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://agorodov22:iUizdXtHcnJf40tP@gllacycluster.o212msn.mongodb.net/";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// export const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
