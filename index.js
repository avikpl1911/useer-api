const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const dotenv = require("dotenv");

const userRoute = require("./server/route");

const cors = require("cors");

const app = express();






    const URL = `mongodb://CRUD-Project:CRUD-Project@ac-cswxkt4-shard-00-00.jopaya8.mongodb.net:27017,ac-cswxkt4-shard-00-01.jopaya8.mongodb.net:27017,ac-cswxkt4-shard-00-02.jopaya8.mongodb.net:27017/?ssl=true&replicaSet=atlas-2471y9-shard-0&authSource=admin&retryWrites=true&w=majority`

         mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
                
             if(!err){
                console.log('Database Connected Succesfully');
             }else{
                console.log(err)
             }


         }
         
      );



dotenv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());




app.use('/', userRoute);


const PORT = process.env.PORT || 9889;

 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
