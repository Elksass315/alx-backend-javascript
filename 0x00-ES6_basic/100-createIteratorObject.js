export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departmentNames = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const next = function () {
    if (currentDepartmentIndex >= departmentNames.length) {
      return { done: true };
    }

    const currentDepartment = departmentNames[currentDepartmentIndex];
    const departmentEmployees = allEmployees[currentDepartment];

    if (currentEmployeeIndex >= departmentEmployees.length) {
      currentEmployeeIndex = 0;
      currentDepartmentIndex += 1;
      return this.next();
    }

    const employee = departmentEmployees[currentEmployeeIndex];
    currentEmployeeIndex += 1;
    return { value: employee, done: false };
  }

  return {
    next
  };
}
