import React from "react";

export const Employees = ({ employees }) => {
  console.log("users length:::", employees.length);
  if (employees.length === 0) return null;

  const EmployeeRow = (employee, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>{employee.manager}</td>
      </tr>
    );
  };

  const employeeTable = employees.map((employee, index) =>
    EmployeeRow(employee, index)
  );

  return (
    <div className="container all-emp-comp">
      <h2>Employees</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Manager ID</th>
          </tr>
        </thead>
        <tbody>{employeeTable}</tbody>
      </table>
    </div>
  );
};
