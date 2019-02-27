// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
// const dbName = 'Todos';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // fetch all collection
  /* db.collection('Todos')
    .find()
    .toArray()
    .then(
      docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log('Unable to fetch todos', err);
      }
    ); */

  // fetch only doc with completed is false
  /* db.collection('Todos')
    .find({completed: false})
    .toArray()
    .then(
      docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log('Unable to fetch todos', err);
      }
    ); */

  // fetch only the id specifield - necessary to use ObjectID because _id in mongodb is a object
  /* db.collection('Todos')
    .find({ _id: ObjectID('5c753be5ef16976c18bef1ce') })
    .toArray()
    .then(
      docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log('Unable to fetch todos', err);
      }
    ); */

  db.collection('Users')
    .find({ name: 'Joca' })
    .toArray()
    .then(
      docs => {
        if (docs.length === 0) {
          return console.log('There is no result');
        }
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log('Unable to fetch todos', err);
      }
    );

  // client.close();
});
