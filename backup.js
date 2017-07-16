const MongoClient = require('mongodb').MongoClient;

var user = {name:'Andrew',age:25};
var {name} = user;
console.log(name)

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server!', err);
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed:false
  // },(err, result) => {
  //   if(err){
  //     console.log('Error occured when inserting', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Baraka Urio',
  //   age:21,
  //   location:'Dar es Salaam, Tanzania'
  // },(err, result) => {
  //   if(err){
  //     console.log('Unable to create Users collection', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});



/*
   We call the mongodb module we just installed.
   Call MongoClient connect to connect to the database. It takes to arguments
       -> a string of url
       -> a callback function

       Creating a new document
           db.collection('name of docuement').insertONe({object}, callback)



      Talking about IDs and why they are useful   (_id)

      Mongo was designed to scale out. Scale out means you add on more database
      servers to handle that load. The object id is made out of 12byte value
         The first four are the timestamp
         The next three is the machine identifier
         The two bytes are process id
         The last three are counter
         Lastly just a random value

         But you can specify an id value if you want
            _id:123

        Now we don't have to rely on mongodb to create the ids for us, the actually
        give us a function so we can make an object id whenever we want.
          Comment out the call to insert name

        We will use object destructuring. Example of destructuring:-
            var user = {name:'Andrew',age:25};
            var {name} = user;
*/
