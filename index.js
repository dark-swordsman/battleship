const express = require('express');
const app = express();

app.use('/', express.static('./src'));

app.listen(7331, function(){
  console.log("Battleship is running on: 7331");
});
