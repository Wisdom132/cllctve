let mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');

let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
