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

  //  db.collection('Todos').find({
  //    _id: new ObjectID('596b33cf909cde43bc5e85e0')
  //  }).toArray().then((docs) => {
  //    console.log('Todos');
  //    console.log(JSON.stringify(docs, undefined, 2));
  //  }, (err) => {
  //    console.log('Unable to fetch docs', err);
  //  });

   db.collection('Users').find({name:'Baraka Urio'}).toArray().then((doc) =>{
     console.log('User found');
     console.log(JSON.stringify(doc, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch doc', err);
   })



  //  db.collection('Todos').find().count().then((count) => {
  //    console.log(`Todos count: ${count}`);
  //  }, (err) => {
  //    console.log('Unable to fetch docs', err);
  //  });



  //db.close();
});

/*
     FETCHING DATA
     db.collection('Todos').find()  -by default you can call the find without any
                                     arguemnt

        .toArray     - gives us an array of results instead of having a cursor

        The .toArray returns a promise to tackle we use the .then
        .then takes in a callback that takes in the documents
        syntax .then((document) => {
           //if things went well
      }, (err) => {
         //things went wrong
    })  IN short: - .then((callback)=>{callback funcs},(err)=>{error funcs})


    So far our Todo app fetches all completed and non-completed tasks. But we need
    only the non-completed tasks. To handle this we will make changes to the .find()
    instead of passing in 0 arguments we are gonna pass in one which is known as
    a query. In the arguemnt we tell it how we want to query the results.
      .find({completed:false});


      Lets take a quick look on how we can query one of oour todo tasks by id.
          We remove everything in the .find() query
          instead we copy the object id from the cmd and paste it in there
             _id: '596a6a246de63e2470af8fda'
             like that;
               but this won't work since the id is not a string but an actual
               object so we have to deconstruct by the way we had required mongodb
               at the very top

               _id: new ObjectID('596b33cf909cde43bc5e85e0')



      Now using the .count method



         SETTING UP THE REPO
*/
