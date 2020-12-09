const createPetGrade = (content) => {
    var reading = content.Reading;
    var writing = content.Writing;
    var listening = content.Listening;
    var speaking = content.Speaking;

    var resultReading = (reading * 25) / 32;
    var percentReading = resultReading / 25;

    var resultWriting = (writing * 25) / 40;
    var percentWriting = resultWriting / 25;
    
    var resultListening = (listening * 25) / 25;
    var percentListening = resultListening / 25;

    var resultSpeaking = (speaking * 25) / 25;
    var percentSpeaking = resultSpeaking / 25;

    var total = (resultWriting + resultReading + resultListening + resultSpeaking);
    
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
        total: total
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
