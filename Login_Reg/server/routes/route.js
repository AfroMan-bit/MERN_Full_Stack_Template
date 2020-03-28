// ROUTES FOR LOGIN AND REGISTRATION FORM 
const Users = require("../controllers/user.controller");



const { authenticate } = require("../config/jwt");

// we add "authenticate" to all our route instances after the LOGIN AND REGISTRATION ROUTES
// for example if we had a class model of "Pets" we would add authenticate to every route like this below


module.exports = app => {
    
    // "/api/register" route registers all users 
    app.post("/register", Users.register);
    // "/api/register" route registers all users 
    app.post("/login", Users.login);


// CLASS MODEL INSTANCES BELOW AND ADDING "authenticate"
    // app.get("/pets", authenticate, PetController.getAll); 
    // app.post("/pets/new", authenticate, PetController.create);
    // app.get("/pets/:id", authenticate, PetController.detail); 
    // app.put("/pets/:id/edit", authenticate, PetController.update); 
    // app.delete("/pets/:id", authenticate, PetController.delete); 
}




 

