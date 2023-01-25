const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const dotenv = require("dotenv");

const userRoute = require("./server/route");

const cors = require("cors");

const app = express();






    const URL = `mongodb+srv://CRUD-Project:CRUD-Project@crud-project.jopaya8.mongodb.net/?retryWrites=true&w=majority`

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
