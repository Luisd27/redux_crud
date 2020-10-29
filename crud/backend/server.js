import express from 'express';
import mongodb from 'mongodb';
import bodyPaser from 'body-parser';

const app = express();
app.use(bodyPaser.json());
const dbUrl = 'mongodb://localhost/27017';
const dbName = 'crudwithredux';

function validate(data){
    let errors = {};
    if(data.title === '') errors.title = "Can't be empty";
    if(data.cover === '') errors.cover = "Can't be empty";
    const isValid = Object.keys(errors).length === 0
    return {errors, isValid};
}

mongodb.MongoClient.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true} ,function(err, client){
    const db = client.db(dbName);
    app.get('/api/games', (req,res) => {
        setTimeout(
            () => {
                db.collection('games').find({}).toArray((err,games) => {
                    res.json({ games });
                });
            }, 2000)
    });

    app.get('/api/games/:_id', (req,res) => {
        db.collection('games').findOne({_id:new mongodb.ObjectId(req.paramas._id)}, (err, game) => {
                res.json({game});
            });
    });

    app.post('/games/api/games', (req, res) => {
        //console.log(req.body)
        const {errors, isValid} = validate(req.body);
        if(isValid){
            const { title, cover } = req.body;
            db.collection('games').insertOne({title, cover}, (err, result) => {
                if(err){
                    res.status(500).json({errors: {global: "Something went wrong"}});
                }else{
                    res.json({game: result.ops[0]});
                }
            }); 
        }else{
            res.status(400).json({errors});
        }
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
