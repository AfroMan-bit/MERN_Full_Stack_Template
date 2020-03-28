// THE CODE BELOW IS USING MONGOOSE TO CREATE SCHEMAS WITH VALIDATIONS 
const mongoose = require ("mongoose");
const bcrypt = require ("bcrypt");


const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: [true, "User's must have a first name"],
        // "min" and "max" is used for validating numbers while "minlength" and "maxlength" is used for validating strings
        minlength: [3, "User's first name must be 3 characters or more"]
    },
    lastName: {
        type: String,
        required: [true, "User's must have a last name"],
        minlength: [3, "User's last name must be 3 characters or more"]
    }, 
    email: {
        type: String,
        required: [true, "User's email is required"],
        validate: {
            // email validator format below
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    }, 
    password: {
        type: String,
        required: [true, "Users's password is required"],
        minlength: [8, "User's password must be 8 characters or longer"] 
    },
    confirmPassword: {
        type: String,
        required: [true],
    }
}, {timestamps: true});

// this below confirms the password and saves a hashed password ABOVE LIKE A LOGIN & REGISTRATION FORM
UserSchema.virtual('confirmPasswprd')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

// this below validates the password with the confirm password
UserSchema.pre('validate', function(next){
    if (this.password !== this.confirmPassword) {
        this.invalidate( 'confirmPassword', `Password must match confirm Password`);
    }
    next();
});

// this below saves the password hashed 
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model( "User", UserSchema);

