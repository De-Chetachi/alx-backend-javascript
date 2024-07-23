#!/usr/bin/env node

module.exports = function countStudents(path) {
  //const { exec } = require(node:child_process);
  const fs = require(node:fs)
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const page =  fs.readFileSync(path, 'utf8');
  const line = page.split('\n')
}
