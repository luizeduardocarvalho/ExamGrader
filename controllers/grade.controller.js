const { gradeService, wordService } = require('../services')

const { createPetGrade, createFceGrade, createCaeGrade } = gradeService;
const { createWordFile } = wordService;

const postPetGrade = async (req, res, next) => {
    try {
        var grades = await createPetGrade(req.body);        
        var docx =  await createWordFile(grades);        
        
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
        var docx =  await createWordFile(grades);        
        
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
        var docx =  await createWordFile(grades);        
        
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

module.exports = {
    postPetGrade,
    postFceGrade,
    postCaeGrade
}