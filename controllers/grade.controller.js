const { gradeService } = require('../services')

const { createGrade } = gradeService

const postGrade = async (req, res, next) => {
    try {
        var content = await createGrade(req.body)
        res.send(content);
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports = {
    postGrade
}