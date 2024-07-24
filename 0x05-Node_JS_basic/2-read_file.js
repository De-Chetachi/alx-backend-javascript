const fs = require('node:fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const page = fs.readFileSync(path, 'utf8');
  const lines = page.split('\n');
  lines.shift();
  let numStudents = 0;
  // console.log(lines)
  const fields = {};
  for (const line of lines) {
    if (line.trim() !== '') {
      const stu = line.split(',');
      // if field object dont already have this field property set it
      // stu[3] holds the field of study
      // else increment the field's total property
      // add the students firstname to the field's students property which is a list
      numStudents += 1;
      if (!(stu[3] in fields)) {
        fields[stu[3]] = { total: 1, students: [stu[0]] };
      } else {
        fields[stu[3]].total += 1;
        fields[stu[3]].students.push(stu[0]);
      }
    }
  }
  // console.log(fields);
  // console.log(typeof(fields))
  console.log(`Number of students: ${numStudents}`);
  for (const field in fields) {
    if (field) {
      const fNames = fields[field].students.join(', ');
      console.log(`Number of students in ${field}: ${fields[field].total}. List: ${fNames}`);
    }
  }
}

module.exports = countStudents;
