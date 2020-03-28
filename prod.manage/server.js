const express = require("express");
const app = express();

const cors = require('cors')
const port = 8000;

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



require('./server/routes/product.routes')(app); 
require('./server/config/mongoose.config');


app.listen(port, () => {
  console.log( `Server is locked and loaded on port ${port}` )
})













