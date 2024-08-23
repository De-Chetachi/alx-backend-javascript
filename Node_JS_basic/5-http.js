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

const { createServer } = require('http');

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.argv[2];
    countStudents(path).then((data) => {
      res.end(`This is the list of our students\n${data}`);
    }).catch((err) => {
      res.end(`This is the list of our students\n${err.message}`);
    });
  }
});

app.listen(port, hostname);

module.exports = app;
