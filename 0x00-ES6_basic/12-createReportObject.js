export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(allEmployees) {
      // Use Object.keys to get department names
      return Object.keys(allEmployees).length;
    },
  };
}
