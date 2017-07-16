//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //identical to the one above
//this helps us create new object ids on the fly



var user = {name:'Andrew',age:25};
var {name} = user;
console.log(name)

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server!', err);
  }
  console.log('Connected to MongoDb server');


  // DELETE MANY
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //DELETE ONE
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  //FIND ONE AND DELETE
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });


  //CHALLENGES HERE BELOW
  // db.collection('Users').deleteMany({name:'Andrew Mead'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('596b314b170fe1262883d8ef')
  }).then((result)=> {
    console.log(result, undefined, 2);
  });

  //db.close();
});



/*
   DELETING DOCUMENTS
  Three ways:-
   1:Deleting Many
     Goal is to delete all that have eat lunchas text
   2:Deleting one
   3:find one and delete
    instead of getting back a result object with an ok and n property. findOneAndDeleteONe
    actually gets the document back
*/
