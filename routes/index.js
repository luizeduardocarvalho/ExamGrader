const express = require('express')

const gradeController = require('../controllers/grade.controller')

const router = express.Router()

router.post('/grade/pet', gradeController.postPetGrade);
router.post('/grade/fce', gradeController.postFceGrade);
router.post('/grade/cae', gradeController.postCaeGrade);
router.post('/grade/placement-test', gradeController.postPlacementTestGrade);
router.post('/grade/upload-file', gradeController.postUploadFile);

module.exports = router