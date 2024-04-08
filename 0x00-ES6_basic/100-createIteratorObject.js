export default function createIteratorObject(report) {
  let empIterator = [];
  for (const value of Object.values(report.allEmployees)) {
    empIterator = empIterator.concat(value);
  }
  return empIterator;
}
