const { gradeService, wordService } = require('../services')
const fs = require('fs');

const { createPetGrade, createFceGrade, createCaeGrade, createPlacementTestGrade } = gradeService;
const { createWordFile } = wordService;

const postPetGrade = async (req, res, next) => {
    try {
        var grades = createPetGrade(req.body);
        var docx = createWordFile(grades);

        res.writeHead(200, {
            "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
            'Content-disposition': `attachment; filename=${grades.student}.docx`
        });
        docx.generate(res);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}

const postFceGrade = async (req, res, next) => {
    try {
        var grades = await createFceGrade(req.body)
        var docx = await createWordFile(grades);

        res.writeHead(200, {
            "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
            'Content-disposition': `attachment; filename=${grades.student}.docx`
        });
        docx.generate(res);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postCaeGrade = async (req, res, next) => {
    try {
        var grades = await createCaeGrade(req.body)
        var docx = await createWordFile(grades);

        res.writeHead(200, {
            "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
            'Content-disposition': `attachment; filename=${grades.student}.docx`
        });
        docx.generate(res);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postPlacementTestGrade = async (req, res, next) => {
    try {
        console.log(req.body.Writing.Grade);
        var grades = createPlacementTestGrade(req.body);
        var docx = createWordFile(grades);

        res.writeHead(200, {
            "Content-Type": "application/vnd.openxmlformats-officedocument.documentml.document",
            'Content-disposition': `attachment; filename=${grades.student}.docx`
        });
        docx.generate(res);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}

const postUploadFile = async (req, res, next) => {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);

        //Path where image will be uploaded
        fstream = fs.createWriteStream('./Grades.xlsx');
        file.pipe(fstream);
        fstream.on('close', function () {
            console.log("Upload Finished of " + filename);
            res.redirect('back');           //where to go next
        });
    });
}

module.exports = {
    postPetGrade,
    postFceGrade,
    postCaeGrade,
    postPlacementTestGrade,
    postUploadFile
}