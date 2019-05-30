require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express(); 
const port = process.env.PORT || 4000; 


const db = require('../db/index')

app.use(express.static('./public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/reviews', (req, res) => { 
  res.send(`Hiiiiiiiiiiii`) 
})

app.get('/api/oneReview', (req, res) => { 
  const reviewUUID = req.query.uuid;
  // console.log(reviewUUID, `log on server side`)
  db.getOneRev(reviewUUID) 
  // console.log(reviewUUID) 
    .then(reviews => { 
      res.send(reviews)
      // console.log(reviews, `reviews on server`)
    })
    .catch(err => console.log(err, `err retrieving reviews`))
});

app.listen(port, () => { console.log(`listening at port ${port}`)});