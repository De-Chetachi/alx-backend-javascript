/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    const studentsError = new TypeError('students must be an array of strings');
    if (!Array.isArray(students)) {
      throw studentsError;
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw studentsError;
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // public instance getter for each attribute
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // public instance setters for each attribute
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = length;
  }

  set students(students) {
    const studentsError = new TypeError('students must be an array of strings');
    if (!Array.isArray(students)) {
      throw studentsError;
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw studentsError;
      }
    }
    this._students = students;
  }
}
