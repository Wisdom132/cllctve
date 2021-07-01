let mongoose = require("mongoose");
let commentSchema = mongoose.Schema({
    CommentContent: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    },
}, { timestamps: true });
module.exports = mongoose.model("Comment", commentSchema);
