const createGrade = (content) => {
    return {
        age: content.Age,
        cpf: content.Cpf,
        email: content.Email,
        name: content.Name
    };
}

module.exports = {
    createGrade
}
