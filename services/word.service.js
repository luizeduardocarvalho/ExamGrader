const officegen = require('officegen')

const createWordFile = (grades) => {
    let docx = officegen('docx')

    var pObj = docx.createP({ align: 'center' });
    pObj.addText(`${grades.level}`, { font_size: 28, font_face: 'Calibri' });
    pObj.addLineBreak();
    pObj.addText(`${grades.mockNumber} MOCK TEST`, { font_size: 28, font_face: 'Calibri' });
    pObj.addLineBreak();
    pObj.addText(`${grades.date}`, { font_size: 18, font_face: 'Calibri' });
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addText(`${grades.student}`, { font_size: 24, font_face: 'Calibri' });
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();

    var pObj = docx.createP({ align: 'left' });
    Object.keys(grades['parts']).forEach(key => {
        pObj.addText(`${key} - ${grades['parts'][key].grade} out of ${grades['parts'][key].maxGrade} (${grades['parts'][key].percentage}%)`, { font_size: 16, font_face: 'Calibri' }, { y: 200 });
        pObj.addLineBreak();
    });

    pObj.addLineBreak();
    pObj.addLineBreak();

    pObj.addText(`FINAL SCORE - ${grades['total'].grade}/${grades['total'].max} =  ${grades['total'].score}`, { font_size: 16, font_face: 'Calibri', bold: true });
    pObj.addLineBreak();
    pObj.addLineBreak();

    pObj.addText(`MARK: ${grades['total'].mark}`, { font_size: 16, font_face: 'Calibri', color: 'FF0000', bold: true });

    docx.on('finalize', function (written) {
        console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
    });
    docx.on('error', function (err) {
        console.log(err);
    });

    return docx;
}

module.exports = {
    createWordFile
}
