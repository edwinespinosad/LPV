'use strict'

var Project = require('../models/proyecto');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Home'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Test'
        });
    },

    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.nombre = params.nombre;
        project.semestre = params.semestre;
        project.materia = params.materia;
        project.anio = params.anio;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: 'Error al guardar el documento.' });

            if (!projectStored) return res.status(404).send({ message: 'No se ha podido guardar el proyecto.' });

            return res.status(200).send({ project: projectStored });
        });
    },

    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';
        if (req.files) {
            var filePath = req.files.imagen.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('.');
            var fileExt = extSplit[1];
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId, { imagen: fileName }, { new: true }, (err, projectUpdated) => {
                    if (err) return res.status(500).send({ message: 'La imagen no se ha subido' });
                    if (!projectUpdated) return res.status(404).send({ message: 'El proyecto no existe y no se ha asignado la imagen' });
                    return res.status(200).send({ project: projectUpdated });
                });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({ message: 'La extensión no es válida' });
                });
            }
        } else {
            return res.status(200).send({ message: fileName });
        }
    },

    getImageFile: function (req, res) {
        var fs = require('fs');
        var path = require('path');
        var file = req.params.image;
        var path_file = './uploads/' + file; fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(200).send({ message: "No existe la imagen..." });
            }
        });
    },

    getProjects: function (req, res) {
        Project.find({}).exec((err, projects) => {
            if (err) return res.status(500).send({ message: 'Error en la petición' });
            if (!projects) return res.status(404).send({ message: 'No hay proyectos' });
            return res.status(200).send({ projects });
        });
    },

    editProject: function (req, res) {
        Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: 'Error al guardar el documento.' });
            if (!projectUpdated) return res.status(404).send({ message: 'No se ha podido guardar el proyecto.' });
            return res.status(200).send({ project: projectUpdated });
        });
    }

};

module.exports = controller;

