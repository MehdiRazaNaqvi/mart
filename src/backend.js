const express = require("express");
const dotenv = require("dotenv")

const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))



var cors = require('cors');
app.use(cors())

dotenv.config({path : "./.env"})
const port =  process.env.PORT || 4000;

app.listen(port, () => {


    app.get('/fetchuser' , (req, res) => {


        const uri = "mongodb+srv://mehdi:mehdimongodb@cluster0.xuahs.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })





        client.connect(err => {

            client.db("database0").collection("col0").find({}).toArray()
            .then((d) => res.send(d) )
            .catch((err) => console.log(err))

        })

        


    })


    app.get('/get' , (req,res) => {
        res.send("haaaaaaaaaaaaaaaaaaaaaaaaaaaaannnnnnnnnnnnnnnnnnnnnnn")
    })



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