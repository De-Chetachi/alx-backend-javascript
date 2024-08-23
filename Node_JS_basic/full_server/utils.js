const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((page) => {
        const lines = page.split('\n');
        let students = -1;
        const fields = {};
        for (const line of lines) {
          if (line.trim() !== '') {
            const data = line.split(',');
            const field = data[3];
            const fName = data[0];

            if (students >= 0) {
              if (!(field in fields)) {
                fields[field] = [];
              }
              fields[field].push(fName);
            }
            students += 1;
          }
        }
        let res = `Number of students: ${students}`;
        for (const field in fields) {
          if (field) {
            const fNames = fields[field].join(', ');
            res += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fNames}`;
          }
        }
        resolve(res);
      })
      .catch((err) => {
        reject(Error('Cannot load the database'));
      });
  });
}

module.exports = readDatabase;
