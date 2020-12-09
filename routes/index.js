const express = require('express')

const { gradeController } = require('../controllers')

const router = express.Router()

router.post('/grade/pet', gradeController.postPetGrade);
router.post('/grade/fce', gradeController.postFceGrade);
router.post('/grade/cae', gradeController.postCaeGrade);

module.exports = router