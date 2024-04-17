/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);

  const studentMap = new Map();
  newGrades.map((grade) => {
    studentMap.set(grade.studentId, grade.grade);
  });

  return cityStudents.map((student) => {
    if (studentMap.has(student.id)) {
      student.grade = studentMap.get(student.id);
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
