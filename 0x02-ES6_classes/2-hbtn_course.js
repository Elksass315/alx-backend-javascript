export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._lenght;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (!(Array.isArray(newstudents) && !newstudents.some((element) => typeof element !== 'string'))) {
      throw new TypeError('bad students array');
    }
    this._students = newstudents;
  }
}
