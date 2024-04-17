export default function getListStudents() {
  function studentObject(id, firstName, location) {
    const student = { id, firstName, location };
    return student;
  }
  const students = [];
  students.push(studentObject(1, 'Guillaume', 'San Francisco'));
  students.push(studentObject(2, 'James', 'Columbia'));
  students.push(studentObject(5, 'Serena', 'San Francisco'));
  return students;
}
