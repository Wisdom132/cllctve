const Comment = require('../models/comment')
class CommentService {
    async getProjectComments(project) {
        return await Comment.find({ projectId: project })
    }
    async addComment(payload) {
        return await Comment.create(payload)
    }
}

module.exports = CommentService


