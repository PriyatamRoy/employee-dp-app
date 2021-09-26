import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import {
  getAllEmployees,
  createEmployee,
  findCommon,
} from "./services/EmployeeService";
import { Employees } from "./components/Employees";
import CommonSuperior from "./components/CommonSuperior";

function App() {
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);
  const [commonManager, setCommonManager] = useState({});

  const employeeCreate = (e) => {
    createEmployee(employee).then((response) => {
      console.log(response);
      fetchAllEmployees();
    });
  };

  const fetchAllEmployees = () => {
    getAllEmployees().then((employees) => {
      console.log(employees);
      setEmployees(employees);
    });
  };

  const onChangeForm = (e) => {
    if (e.target.name === "firstname") {
      employee.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      employee.lastName = e.target.value;
    } else if (e.target.name === "email") {
      employee.email = e.target.value;
    }
    setEmployee(employee);
  };

  const updateManager = (selected) => {
    if (selected && selected[0] && selected[0].id) {
      employee.manager = selected[0].id;
      //setEmployee(employee);
      console.log("employee: " + JSON.stringify(employee));
    }
  };

  const findCommonManager = (selection1, selection2) => {
    if (typeof selection1 == "object" && typeof selection2 == "object") {
      findCommon(selection1[0].id, selection2[0].id).then((manager) => {
        setCommonManager(manager);
      });
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <AddEmployee
              employees={employees}
              onChangeForm={onChangeForm}
              addEmployee={employeeCreate}
              fetchAllEmployees={fetchAllEmployees}
              updateManager={updateManager}
            ></AddEmployee>
            <div className="row">
              <div className="col-md-12">
                <CommonSuperior
                  employees={employees}
                  findCommonManager={findCommonManager}
                  commonManager={commonManager}
                ></CommonSuperior>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Employees employees={employees}></Employees>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
