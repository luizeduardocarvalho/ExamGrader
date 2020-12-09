const { gradeService } = require('../services')

const { createPetGrade, createFceGrade, createCaeGrade } = gradeService

const postPetGrade = async (req, res, next) => {
    try {
        var content = await createPetGrade(req.body)
        res.send(content);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postFceGrade = async (req, res, next) => {
    try {
        var content = await createFceGrade(req.body)
        res.send(content);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postCaeGrade = async (req, res, next) => {
    try {
        var content = await createCaeGrade(req.body)
        res.send(content);
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