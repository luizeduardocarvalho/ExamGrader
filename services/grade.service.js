const createPetGrade = (content) => {
    var reading = content.Reading;
    var writing = content.Writing;
    var listening = content.Listening;
    var speaking = content.Speaking;

    var resultReading = (reading * 25) / 32;
    var percentReading = resultReading / 25 * 100;    
    
    var resultWriting = (writing * 25) / 40;
    var percentWriting = resultWriting / 25 * 100;    
    
    var resultListening = (listening * 25) / 25;
    var percentListening = resultListening / 25 * 100;  

    var resultSpeaking = (speaking * 25) / 25;
    var percentSpeaking = resultSpeaking / 25 * 100;

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

    return {
        level: 'B1 PRELIMINARY',
        date: 'November, 2020',
        mockNumber: '2nd',
        student: content.StudentName,
        parts: {
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
        },
        total: {
            max: 100,
            grade: total.toFixed(2),
            score: score,
            mark: mark
        }
    };
}

const createFceGrade = (content) => {
    var reading = content.Reading;
    var writing = content.Writing;
    var listening = content.Listening;
    var speaking = content.Speaking;

    var resultReading = (reading * 40) / 70;
    var percentReading = (resultReading / 40) * 100;

    var resultWriting = (writing * 40) / 40;
    var percentWriting = (resultWriting / 40) * 100;

    var resultListening = (listening * 40) / 30;
    var percentListening = (resultListening / 40) * 100;

    var resultSpeaking = (speaking * 40) / 25;
    var percentSpeaking = (resultSpeaking / 40) * 100;

    var total = resultWriting + resultReading + resultListening + resultSpeaking;
    var score = (total / 160) * 100;
    score = Math.round(score);

    var mark;
    if(score < 60) {
        mark = 'D';
    } else if (score >= 60 && score < 75) {
        mark = 'C';
    } else if(score >= 75 && score < 90) {
        mark = 'B';
    } else {
        mark = 'A';
    }

    return {
        level: 'B2 PRELIMINARY',
        date: 'November, 2020',
        mockNumber: '2nd',
        student: content.StudentName,
        parts: {
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
        },
        total: {
            max: 160,
            grade: total.toFixed(2),
            score: score,
            mark: mark
        }
    };
}

const createCaeGrade = (content) => {
    var reading = content.Reading;
    var writing = content.Writing;
    var listening = content.Listening;
    var speaking = content.Speaking;

    var resultReading = (reading * 40) / 78;
    var percentReading = (resultReading / 40) * 100;

    var resultWriting = (writing * 40) / 40;
    var percentWriting = (resultWriting / 40) * 100;

    var resultListening = (listening * 40) / 30;
    var percentListening = (resultListening / 40) * 100;

    var resultSpeaking = (speaking * 40) / 25;
    var percentSpeaking = (resultSpeaking / 40) * 100;

    var score = resultWriting + resultReading + resultListening + resultSpeaking;
    var total = (score / 160) * 100;

    return {
        reading: {
            result: resultReading,
            percent: percentReading
        },
        writing: {
            result: resultWriting,
            percent: percentWriting
        },
        listening: {
            result: resultListening,
            percent: percentListening
        },
        speaking: {
            result: resultSpeaking,
            percent: percentSpeaking
        },
        total: {
            score: score,
            total
        }
    };
}

module.exports = {
    createPetGrade,
    createFceGrade,
    createCaeGrade
}
