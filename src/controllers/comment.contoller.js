const CommentService = require('../services/comment.service');
const BaseControler = require('./BaseController')

class CommentControler extends BaseControler {
    static async getCommentForProject(req, res) {
        let commentService = new CommentService();
        try {
            let comments = await commentService.getProjectComments(req.params.id);
            res.status(200).json({
                msg: 'All comments',
                data: comments
            })
        } catch (err) {
            res.status(500).json({
                error: err,
                msg: "An error occured"
            })
        }

    }

    static async addComment(req, res) {
        let commentService = new CommentService();
        try {
            let payload = {
                userId: req.body.userId,
                ProjectId: req.body.ProjectId,
                CommentContent: req.body.CommentContent
            }
            let comments = await commentService.addComment(payload);
            res.json({
                data: comments,
                message: 'Comment Added'
            })
        } catch (err) {
            res.status(500).json({
                error: err,
                msg: "An error occured"
            })
        }

    }
}
module.exports = CommentControler