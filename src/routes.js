const express = require('express');
const ProjectController = require('./controllers/project.controller')
const CommentController = require('./controllers/comment.contoller')
const UserController = require('./controllers/user.controller')

const router = express.Router();

router.get('/projects', ProjectController.getAllProjects);
router.post('/create-project', ProjectController.createProject);


router.get('/portfolio-comments/:projectId', CommentController.getCommentForProject);
router.post('/add-comment', CommentController.addComment);


router.get('/users', UserController.getAllUsers);
router.post('/add-user', UserController.addUser);

module.exports = router

