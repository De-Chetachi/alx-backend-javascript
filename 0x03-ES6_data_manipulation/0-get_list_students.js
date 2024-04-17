export default function getListStudents() {
  function studentObject(id, firstname, location) {
    const student = { id, firstname, location };
    return student;
  }
  const students = [];
  students.push(studentObject(1, 'Guillaume', 'San Francisco'));
  students.push(studentObject(2, 'James', 'Columbia'));
  students.push(studentObject(5, 'Serena', 'San Francisco'));
  return students;
}
