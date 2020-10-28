import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/27017';
const dbName = 'crudwithredux';


mongodb.MongoClient.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true} ,function(err, client){
    const db = client.db(dbName);
    app.get('/api/games', (req,res) => {
        db.collection('games').find({}).toArray((err,games) => {
            res.json({ games });
        });
    });

    app.use((req, res) => {
        res.status(404).json({
            errors:{
                global: "Still working on this shit!"
            }
        })
    });
    
    app.listen(8080, () => console.log('Sever is running on localhost:8080'));
});
