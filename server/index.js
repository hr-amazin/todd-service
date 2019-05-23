const express = require('express');
const app = express(); 


app.use(express.static('./public')) 

app.get('/api/reviews', (req, res) => { 
  res.send(`Hiiiiiiiiiiii`)
})


app.listen( 4000, () => { console.log('listening at port 4000') } )