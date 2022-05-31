const express = require("express");

const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const port = 3000;

app.listen(port, () => {

    app.post('/adduser' , (req,res) => {
        console.log(req.body)




        
        const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })





        client.connect(err => {

            client.db("database0").collection("col0").insertOne(req.body)
            .then(() => console.log("success") )
            .catch((err) => console.log(err))

        })










    })
})