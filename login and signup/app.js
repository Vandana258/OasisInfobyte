/*const express=require('express');
const mongoose=require('mongoose');
const homerouters=require('./routers/homerouters')
const bodyParser=require('body-parser');

const port=process.env.port||8080;

const app=express();

mongoose.connect('mongodb://localhost:27017/login2000',{useNewUrlParser:true})
const db=mongoose.connection;

db.on("error", (error) => {
  console.error('MongoDB connection error:', error);
})
db.once('open', () => {
  console.log('Connected to MongoDB');
})

mongoose
  .connect(`mongodb+srv://login2001:ynPL2u932GdVjWDY@cluster0.g8mwqyl.mongodb.net/loginAuthentication?retryWrites=true&w=majority`)
  db.on("error", (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.set('view engine','ejs')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',homerouters);


//app.listen(port);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homerouters')
const port  = process.env.port || 8080;

const app  = express();

// db con

/*mongoose.connect('mongodb://127.0.0.1:27017/studentsdata',{useNewUrlParser:true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})*/


/*mongoose
  .connect(`mongodb+srv://login2001:ynPL2u932GdVjWDY@cluster0.g8mwqyl.mongodb.net/loginAuthentication?retryWrites=true&w=majority`)
  .then(() => {
  console.log('Connected to MongoDB');
})*/
/*mongoose
  .connect(`mongodb+srv://login2002:ld5KV1fZ1RRT2kms@cluster0.g8mwqyl.mongodb.net/loginAuthentication?retryWrites=true&w=majority`)
  .then(() => {
  console.log('Connected to MongoDB');
})*/

mongoose
  .connect(`mongodb+srv://login2002:ld5KV1fZ1RRT2kms@cluster0.g8mwqyl.mongodb.net/loginAuthentication?retryWrites=true&w=majority`)
  .then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
}); 

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', homeRouter)

app.listen(port)
