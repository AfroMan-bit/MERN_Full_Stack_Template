const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// you can use this code below also to declare the port you want the server for the app to run 
const port = 8000;

app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

app.listen(port, () => console.log(`Server is locked and loaded on port ${port}`));


// both code below are express middleware functions. They are responsible for providing and parsing the request.body data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 
// after fufilling the above code go to the package.json file here in our VS CODE, and change "start": "node server.js" to "start":"nodemon server.js"
// When we run the server by default using node server.js we will have to restart the server manually every time we update our code; otherwise, the running app will not reflect the changes. 
// "nodemon server.js"  instead of the regular "node server.js"


// REQUIRING ROUTES BELOW
require("./server/config/mongoose")(db_name);
require("./server/routes/route")(app);


// MAKE SURE YOU INSTALL THE FOLLOWING PACKAGES npm install
// jsonwebtoken
// bcrypt
// mongoose 
// express 
// cors
// cookie-parser


