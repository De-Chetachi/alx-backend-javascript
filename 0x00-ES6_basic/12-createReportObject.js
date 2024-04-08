export default function createReportObject(employeesList) {
  const emp = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const NumberOfDepartments = Object.keys(this.allEmployees).length;
      return NumberOfDepartments;
    },
  };
  return emp;
}
