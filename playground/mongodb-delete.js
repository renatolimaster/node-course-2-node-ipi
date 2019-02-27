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

  // deleteMany
  /* db.collection('Todos')
    .deleteMany({ text: 'Eat lunch' })
    .then(result => {
      console.log(result);
    }); */
  // deleteOne
  /*  db.collection('Todos')
    .deleteOne({ text: 'Eat lunch', completed: false })
    .then(result => {
      console.log(result);
    }); */
  // dindOneAndDelete
  /* db.collection('Todos')
    .findOneAndDelete({ completed: false })
    .then(result => {
      console.log(result);
    }); */
  // client.close();

  // USERS
  /* db.collection('Users')
    .deleteMany({ name: 'Andrew' })
    .then(result => {
      console.log(result);
    }); */
  db.collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5c753e06dbe23d6e862eb0af') })
    .then(result => {
      console.log(result);
    });
});
