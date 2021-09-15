class Grade {
	constructor() {
		this.level = undefined;
		this.date = undefined;
		this.mockNumber = undefined;
		this.student = undefined;
		this.parts = undefined;
		this.total = undefined;
	}

	setLevel(level) {
		this.level = level;
		return this;
	}

	setDate(date) {
		this.date = date;
		return this;
	}

	setMockNumber(mockNumber) {
		this.mockNumber = mockNumber;
		return this;
	}

	setStudent(student) {
		this.student = student;
		return this;
	}

	setParts(parts) {
		this.parts = parts;
		return this;
	}

	setTotal(max, total, score, mark) {

		this.total = {
			max,
			grade: total,
			score,
			mark
		}

		return this;
	}
}

module.exports = Grade;