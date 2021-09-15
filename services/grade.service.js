const Grade = require('../models/grade');

const calculateGrade = (grade, value, max) => {
    var result = (grade * value) / max;
    var percent = result / value * 100;  
    return {
        result: result,
        percent: percent
    };
};

module.exports.createPetGrade = (content) => {
    let grade = new Grade();
    var reading = Number(content.Reading);
    var writing = Number(content.Writing);
    var listening = Number(content.Listening);
    var speaking = Number(content.Speaking);
    
    const { result: resultReading, percent: percentReading } = calculateGrade(reading, 25, 32);
    const { result: resultWriting, percent: percentWriting } = calculateGrade(writing, 25, 40);
    const { result: resultListening, percent: percentListening } = calculateGrade(listening, 25, 25);
    const { result: resultSpeaking, percent: percentSpeaking } = calculateGrade(speaking, 25, 25);

    var total = (resultWriting + resultReading + resultListening + resultSpeaking);
    var score = Math.round(total);

    var mark;
    if(score < 70) {
        mark = 'D';
    } else if (score >= 70 && score < 85) {
        mark = 'C';
    } else if(score >= 85 && score < 90) {
        mark = 'B';
    } else {
        mark = 'A';
    }
    
    let parts = {
        Reading: {
            maxGrade: 25,
            grade: resultReading.toFixed(2),
            percentage: Math.round(percentReading)
        },
        Writing: {
            maxGrade: 25,
            grade: resultWriting.toFixed(2),
            percentage: Math.round(percentWriting)
        },
        Listening: {
            maxGrade: 25,
            grade: resultListening.toFixed(2),
            percentage: Math.round(percentListening)
        },
        Speaking: {
            maxGrade: 25,
            grade: resultSpeaking.toFixed(2),
            percentage: Math.round(percentSpeaking)
        }
    };

    grade
        .setLevel('B1 PRELIMINARY CAMBRIDGE EXAM')
        .setDate('September, 2021')
        .setMockNumber('2nd')
        .setStudent(content.StudentName)
        .setParts(parts)
        .setTotal(160, total.toFixed(2), score, mark);

    return grade;
}

module.exports.createFceGrade = (content) => {
    let grade = new Grade();
    var reading = content.Reading;
    var writing = content.Writing;
    var listening = content.Listening;
    var speaking = content.Speaking;

    const { result: resultReading, percent: percentReading } = calculateGrade(reading, 40, 70);
    const { result: resultWriting, percent: percentWriting } = calculateGrade(writing, 40, 40);
    const { result: resultListening, percent: percentListening } = calculateGrade(listening, 40, 30);
    const { result: resultSpeaking, percent: percentSpeaking } = calculateGrade(speaking, 40, 25);

    var total = resultWriting + resultReading + resultListening + resultSpeaking;
    var score = (total / 160) * 100;
    score = Math.round(score);

    var mark;
    if(score < 60) {
        mark = 'D';
    } else if (score >= 60 && score < 75) {
        mark = 'C';
    } else if(score >= 75 && score < 80) {
        mark = 'B';
    } else {
        mark = 'A';
    }

    let parts = {
        Reading: {
            maxGrade: 40,
            grade: resultReading.toFixed(2),
            percentage: Math.round(percentReading)
        },
        Writing: {
            maxGrade: 40,
            grade: resultWriting.toFixed(2),
            percentage: Math.round(percentWriting)
        },
        Listening: {
            maxGrade: 40,
            grade: resultListening.toFixed(2),
            percentage: Math.round(percentListening)
        },
        Speaking: {
            maxGrade: 40,
            grade: resultSpeaking.toFixed(2),
            percentage: Math.round(percentSpeaking)
        }
    };

    grade
        .setLevel('B2 FIRST CAMBRIDGE EXAM')
        .setDate('September, 2021')
        .setMockNumber('2nd')
        .setStudent(content.StudentName)
        .setParts(parts)
        .setTotal(160, total.toFixed(2), score, mark);

    return grade;
}

module.exports.createCaeGrade = (content) => {
    let grade = new Grade();
    var reading = content.Reading;
    var writing = content.Writing;
    var listening = content.Listening;
    var speaking = content.Speaking;

    const { result: resultReading, percent: percentReading } = calculateGrade(reading, 40, 78);
    const { result: resultWriting, percent: percentWriting } = calculateGrade(writing, 40, 40);
    const { result: resultListening, percent: percentListening } = calculateGrade(listening, 40, 30);
    const { result: resultSpeaking, percent: percentSpeaking } = calculateGrade(speaking, 40, 25);

    var total = resultWriting + resultReading + resultListening + resultSpeaking;
    var score = (total / 160) * 100;
    score = Math.round(score);

    var mark;
    if(score < 60) {
        mark = 'D';
    } else if (score >= 60 && score < 75) {
        mark = 'C';
    } else if(score >= 75 && score < 80) {
        mark = 'B';
    } else {
        mark = 'A';
    }

    let parts = {
        Reading: {
            maxGrade: 40,
            grade: resultReading.toFixed(2),
            percentage: Math.round(percentReading)
        },
        Writing: {
            maxGrade: 40,
            grade: resultWriting.toFixed(2),
            percentage: Math.round(percentWriting)
        },
        Listening: {
            maxGrade: 40,
            grade: resultListening.toFixed(2),
            percentage: Math.round(percentListening)
        },
        Speaking: {
            maxGrade: 40,
            grade: resultSpeaking.toFixed(2),
            percentage: Math.round(percentSpeaking)
        }
    };

    grade
        .setLevel('B2 FIRST CAMBRIDGE EXAM')
        .setDate('September, 2021')
        .setMockNumber('2nd')
        .setStudent(content.StudentName)
        .setParts(parts)
        .setTotal(160, total.toFixed(2), score, mark);

    return grade;
}

module.exports.createPlacementTestGrade = (content) => {
    let finalGrade = new Grade();
    let reading = Number(content.Reading);
    let writing = content.Writing;
    let listening = Number(content.Listening);
    let text = Number(writing.Text);
    let grade = Number(writing.Grade);
    
    const { result: resultReading, percent: percentReading } = calculateGrade(reading, 45, 20);
    let resultWriting = (((grade * 100) / 5) * (10 / 100)) + text;
    let percentWriting = resultWriting / 35 * 100;    
    const { result: resultListening, percent: percentListening } = calculateGrade(listening, 20, 12);

    let total = (percentWriting + percentReading + percentListening) / 3;
    let score = Math.round(total);

    let parts = {
        Reading: {
            maxGrade: 45,
            grade: resultReading.toFixed(2),
            percentage: Math.round(percentReading)
        },
        Writing: {
            maxGrade: 35,
            grade: resultWriting.toFixed(2),
            percentage: Math.round(percentWriting)
        },
        Listening: {
            maxGrade: 20,
            grade: resultListening.toFixed(2),
            percentage: Math.round(percentListening)
        }
    };

    finalGrade
        .setLevel('B2 FIRST CAMBRIDGE EXAM')
        .setDate('September, 2021')
        .setMockNumber('2nd')
        .setStudent(content.StudentName)
        .setParts(parts)
        .setTotal(100, total.toFixed(2), score);

    return finalGrade;
}
