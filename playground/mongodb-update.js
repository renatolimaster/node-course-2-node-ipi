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

  // TODOS
  /* db.collection('Todos')
    .findOneAndUpdate(
      {
        _id: ObjectID('5c76bb3cb918d6cef080b4e9')
      },
      {
        $set: {
          completed: true
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    }); */

    // USERS
  db.collection('Users')
    .findOneAndUpdate(
      {
        _id: ObjectID('5c76bd98b918d6cef080b5a8')
      },
      {
        $set: {
          name: 'Renato'
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });


});
