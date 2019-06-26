const  express = require('express');
const  app = express();
const port = process.env.PORT || 5000;


// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, function() {
  console.log('listening on port 3000!');
});
