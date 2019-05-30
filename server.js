const express = require('express');
var path = require('path');

const app = express();


app.use(express.static(__dirname + '/dist/SecondProject'))


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/SecondProject/index.html'))
})

app.listen(4002, function () {
})


