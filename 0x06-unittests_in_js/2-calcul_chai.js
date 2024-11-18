#!/usr/bin/env node

function calculateNumber(type, a, b) {
  const c = Math.round(a);
  const d = Math.round(b);
  if (type === 'SUM') {
    return( c + d);
  }
  if (type === 'SUBTRACT') {
    return( c - d);
  }
  if (type === 'DIVIDE') {
    if (d == 0) {
      return('Error')
    }
    return( c / d);
  }
}
console.log(calculateNumber(0, 0));
console.log(calculateNumber(-1.5, -2.4));
console.log(calculateNumber('a', 'b'));
console.log(calculateNumber('a', 10));
export default calculateNumber;
