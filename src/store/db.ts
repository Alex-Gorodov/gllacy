const { MongoClient } = require('mongodb');

// Создаем новый экземпляр MongoClient
export const client = new MongoClient('mongodb+srv://agorodov22:iUizdXtHcnJf40tP@gllacycluster.o212msn.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function updateDocuments() {
  try {
    // Подключаемся к MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Выбираем базу данных и коллекцию для обновления
    const database = client.db('gllacy');
    const collection = database.collection('shopItems');

    // Обновляем объекты в коллекции
    const result = await collection.updateMany(
      { name: "Malinka" },
      { $set: { img: process.env.PUBLIC_URL + "/img/shop/item-1.webp" } },
      { name: "Pistachio" },
      { $set: {img:process.env.PUBLIC_URL + "/img/shop/item-2.webp"}}
    );

    console.log(`${result.modifiedCount} documents updated`);

  } catch (error) {
    console.error('Error updating documents:', error);
  } finally {
    // В любом случае отключаемся от MongoDB
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Вызываем функцию для обновления документов
updateDocuments();
