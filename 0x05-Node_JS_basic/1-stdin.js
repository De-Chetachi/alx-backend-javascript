#!/usr/bin/env node

const welcome = 'Welcome to Holberton School, what is your name?';
console.log(welcome);

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  const bye = 'This important software is now closing';
  console.log(bye);
});
