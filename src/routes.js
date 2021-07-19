const express = require('express');
const ProjectController = require('./controllers/project.controller');
const CommentController = require('./controllers/comment.contoller');
const UserController = require('./controllers/user.controller');

const router = express.Router();

router.get('/projects', (req, res) => {
  ProjectController.findAll(req, res);
});
router.get('/projects/list/get', (req, res) => {
  ProjectController.list(req, res);
});
router.post('/create-project', (req, res) => {
  ProjectController.create(req, res);
});
router.get('/projects/:id', (req, res) => {
  ProjectController.findOne(req, res);
});
router.put('/projects/:id', (req, res) => {
  ProjectController.update(req, res);
});

router.get(
  '/portfolio-comments/:projectId',
  CommentController.getCommentForProject
);
router.post('/add-comment', CommentController.addComment);

router.get('/users', UserController.getAllUsers);
router.post('/add-user', UserController.addUser);

module.exports = router;
