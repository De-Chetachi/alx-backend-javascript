const express = require('express');
const fs = require('fs').promises;

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
              fields[stu[3]] = { total: 1, students: [stu[0]] };
            } else {
              fields[stu[3]].total += 1;
              fields[stu[3]].students.push(stu[0]);
            }
          }
        }
        let res = `Number of students: ${numStudents}`;
        for (const field in fields) {
          if (field) {
            const fNames = fields[field].students.join(', ');
            res += `\nNumber of students in ${field}: ${fields[field].total}. List: ${fNames}`;
          }
        }
        resolve(res);
      })
      .catch(() => {
        reject(Error('Cannot load the database'));
      });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  countStudents(path).then((data) => {
    res.send(`This is the list of our students\n${data}`);
  }).catch((err) => {
    res.send(`This is the list of our students\n${err.message}`);
  });
});

app.listen(port);

module.exports = app;
