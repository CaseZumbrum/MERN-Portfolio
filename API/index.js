const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose");
const Post = require('./models/Post');
require("dotenv").config();

app.use(express.json());
app.use('/static', express.static('public'));
app.use(express.static('/var/www/html/'))
app.use(cors());
mongoose.connect('mongodb+srv://casezumbrum:Fp8GuQg3EKoSLIZ2@cluster0.l7fueqv.mongodb.net/content?retryWrites=true&w=majority');

app.get('/posts', async (req,res) => {
    res.json(await Post.find().sort({time:-1}));
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/check_Connection', (req,res) => {
  res.send("server is running");
});

process.on('uncaughtException', (err, origin) => {
  //code to log the errors
  console.log(
     `Caught exception: ${err}\n` +
     `Exception origin: ${origin}`,
   );
 });
 

app.listen(80);
console.log("Listening on port 80");