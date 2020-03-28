const express = require("express");
const app = express();

const cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



require('./server/routes/person.routes')(app); 
require('./server/config/mongoose.config');


app.listen(8000, () => {
  console.log("Server is locked and loaded on port 8000")
})














