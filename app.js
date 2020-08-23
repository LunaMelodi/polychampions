const express = require('express');
const app = express();
const port = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  console.log('received request: ' + req);
  res.json({ data: 'Hello World!' });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})