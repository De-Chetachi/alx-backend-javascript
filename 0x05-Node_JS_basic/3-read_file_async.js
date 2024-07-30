const fs = require('fs/promises')

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((page) => {
        const lines = page.split('\n');
	lines.shift();
	let numStudents = 0;
	const fields = {};
	for (const line of lines) {
	  if (line.trim() !== '') {
	    const stu = line.split(',');
	    numStudents += 1;
	    if (!(stu[3] in fields)) {
	      fields[stu[3]] = { total: 1, students: [stu[0]] }
	    } else {
	      fields[stu[3]].total += 1;
	      fields[stu[3]].students.push(stu[0]);
	    }
	  }
	}
	console.log(`Number of students: ${numStudents}`);
	for (const field in fields) {
	  if (field) {
	    const fNames = fields[field].students.join(', ');
	    console.log(`Number of students in ${field}: ${fields[field].total}. List: ${fNames}`);
	  }
	}
	resolve()

      })
      .catch((err) => {
        reject(Error('Cannot load the database'));
      })

  })

}

module.exports = countStudents;
