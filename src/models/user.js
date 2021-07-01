let mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);
