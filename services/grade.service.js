const createGrade = (content) => {
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

module.exports = {
    createGrade
}
