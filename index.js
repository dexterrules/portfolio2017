const express = require('express')
const path = require('path')  
const app = express()  

//app.set('view engine', 'html')  
app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, ''))  
app.get('/', (request, response) => {  
  response.sendFile(path.join(__dirname, '')+'/index.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }
//
//   console.log(`server is listening on ${port}`)
// })

