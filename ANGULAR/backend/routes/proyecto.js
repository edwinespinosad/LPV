'use strict'

var express = require('express');
var ProyectoController = require('../controllers/proyecto');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

router.get('/home', ProyectoController.home);
router.post('/test', ProyectoController.test);
// CRUD
router.post('/save-project', ProyectoController.saveProject);
router.get('/getProjects', ProyectoController.getProjects);
router.get('/getProject/:id', ProyectoController.getProject);

router.post('/editProject/:id', ProyectoController.editProject);
router.post('/upload-image/:id', multipartMiddleware, ProyectoController.uploadImage);
router.delete('/deleteProject/:id', ProyectoController.deleteProject);
router.get('/get-image/:image', ProyectoController.getImageFile);

module.exports = router;
