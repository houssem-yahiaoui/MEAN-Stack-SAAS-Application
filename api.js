'use strict';

const app = require('express')();
const morgan = require('morgan');

app.use(morgan('dev'));

//Introducing a route !
app.get("/", (req, res) =>{
  res.status(200).json({success: true, message: 'Hello world !'});
});

app.listen(3000, () => {
  console.log("Listening over port 3000 !");
});
