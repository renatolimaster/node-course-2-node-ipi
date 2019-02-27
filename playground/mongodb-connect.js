// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
// const dbName = 'Todos';

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  /* db.collection('Todos').insertOne(
    {
      text: 'Something to do',
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  ); */

  /* db.collection('Users').insertOne(
    {
      name: 'Renato',
      age: 58,
      location: '01882'
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  ); */

  client.close();
});
