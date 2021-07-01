let mongoose = require("mongoose");
let projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },

}, { timestamps: true });
module.exports = mongoose.model("Project", projectSchema);

