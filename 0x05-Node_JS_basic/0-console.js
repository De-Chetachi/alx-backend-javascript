#!/usr/bin/env node

module.exports = function displayMessage(message) {
  process.stdout.write(`${message}\n`);
};
