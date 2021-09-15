const gradeService = require('../services/grade.service')
const wordService = require('../services/word.service')
const fs = require('fs');
const officegen = require('officegen')
const readXlsxFile = require('read-excel-file/node')

const docx = officegen('docx')

const { createPetGrade, createFceGrade, createCaeGrade, createPlacementTestGrade } = gradeService;
const { createWordFile } = wordService;

module.exports.postPetGrade = async (req, res, next) => {
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

module.exports.postFceGrade = async (req, res, next) => {
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

module.exports.postCaeGrade = async (req, res, next) => {
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

module.exports.postPlacementTestGrade = async (req, res, next) => {
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

module.exports.postUploadFile = async (req, res, next) => {
	var fstream;
	await req.pipe(req.busboy);
	await req.busboy.on('file', function (fieldname, file, filename) {
		console.log("Uploading: " + filename);
		//Path where image will be uploaded
		fstream = fs.createWriteStream('C:\\Users\\Public\\Grades.xlsx');
		file.pipe(fstream);
		fstream.on('close', function () {
			console.log("Upload Finished of " + filename);
			readXlsxFile('C:\\Users\\Public\\Grades.xlsx').then((rows) => {
				let level = rows[0][0];
				console.log('\n\nCreating files for ' + level + '...\n\n');
				rows.slice(2).forEach(async row => {
					let gradesInfo = {
						"StudentName": row[0],
						"Reading": row[5],
						"Writing": row[8],
						"Speaking": row[10],
						"Listening": row[9]
					}

					let grades;

					switch (level) {
						case 'PET':
							grades = gradeService.createPetGrade(gradesInfo);
						case 'FCE':
							grades = gradeService.createFceGrade(gradesInfo);
						case 'CAE':
							grades = gradeService.createCaeGrade(gradesInfo);
					}

					await new Promise((resolve, reject) => {
						let out = fs.createWriteStream(`C:\\Users\\Public\\${grades.student}.docx`);

						docx.on('error', function (err) {
							reject(err)
						})

						out.on('error', function (err) {
							reject(err)
						})

						out.on('close', function () {
							resolve()
						})
						let doc = wordService.createWordFile(grades);
						doc.generate(out)
					})
				});
			})
		});
	});
}