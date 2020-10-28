import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/27017';
const dbName = 'crudwithredux';


mongodb.MongoClient.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true} ,function(err, client){
    if (err) throw err;
    const db = client.db(dbName);
    app.get('/api/games', (req,res) => {
        db.collection('games').find({}).toArray((err,games) => {
            if(err) throw err;
            res.json({ games });
        });
    });
    app.listen(8080, () => console.log('Sever is running on localhost:8080'));
});