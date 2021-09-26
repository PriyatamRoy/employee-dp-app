const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
const bodyParser = require("body-parser");

// const employees = [];

const employees = [
  {
    firstName: "Priyatam",
    lastName: "Roy",
    email: "roy28.priyatam@gmail.com",
    id: 1,
  },
  {
    firstName: "Emp1",
    lastName: "",
    email: "roy28.priyatam@gmail.com",
    manager: 1,
    id: 2,
  },
  {
    firstName: "Emp2",
    lastName: "",
    email: "roy28.priyatam@gmail.com",
    manager: 2,
    id: 3,
  },
  {
    firstName: "Emp3",
    lastName: "",
    email: "roy28.priyatam@gmail.com",
    manager: 2,
    id: 4,
  },
  {
    firstName: "Emp4",
    lastName: "",
    email: "roy28.priyatam@gmail.com",
    manager: 1,
    id: 5,
  },
  {
    firstName: "Emp5",
    lastName: "",
    email: "roy28.priyatam@gmail.com",
    manager: 5,
    id: 6,
  },
  {
    firstName: "Emp6",
    lastName: "",
    email: "roy28.priyatam@gmail.com",
    id: 7,
  },
];

app.use(bodyParser.json());
//app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Server is up :)" });
});

app.get("/api/employees", (req, res) => {
  console.log("Get All Employees");
  res.json(employees);
});

app.get("/api/employees/:id", (req, res) => {
  console.log("Get Employee by ID");
  let empid = parseInt(req.params.id) - 1;
  if (empid < employees.length) {
    res.json(employees[empid]);
  } else {
    res.send("Invalid employee ID!");
  }
});

app.get("/api/employees/:id/managers", (req, res) => {
  console.log("Get Managers of an Employee");
  let empid = parseInt(req.params.id) - 1;
  let managerId = employees[empid].manager;
  let managers = [];

  while (managerId) {
    managerId--;
    let manager = employees[managerId];
    managers.push(manager);
    managerId = manager.manager;
  }

  res.json(managers);
});

app.get("/api/employees/:id/reportees", (req, res) => {
  console.log("Get Reportees of an Employee");
  let empid = parseInt(req.params.id);
  let reportees = [];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].manager == empid) {
      reportees.push(employees[i]);
    }
  }
  res.json(reportees);
});

app.get("/api/lca/:id1/:id2", (req, res) => {
  console.log("Find common manager of two employees");
  let empid1 = parseInt(req.params.id1) - 1;
  let empid2 = parseInt(req.params.id2) - 1;
  let managers1 = {};

  if(!employees[empid1].manager || !employees[empid2].manager) {
    res.json({});
    return;
  }

  let managerId = employees[empid1].manager;

  while (managerId) {
    managerId--;
    let manager = employees[managerId];
    managers1[manager.id] = manager;
    managerId = manager.manager;
  }

  managerId = employees[empid2].manager;
  while (managerId) {
    managerId--;
    let manager = employees[managerId];
    if (managers1[manager.id]) {
      res.json(manager);
      break;
    } else {
      managerId = manager.manager;
    }
  }
  if (!managerId) {
    res.json({});
  }
});

app.post("/api/employees", (req, res) => {
  console.log("Create employee");
  const employee = req.body.employee;
  if (employee) {
    employee["id"] = employees.length + 1;
    employees.push(employee);
    res.json("Employeee added");
  } else {
    res.send("Empty Request");
  }
});

app.post("/api/employees/:id", (req, res) => {
  console.log("Update employee");
  let index = parseInt(req.params.id) - 1;
  if (index < employees.length) {
    let obj = req.body.update;
    if (obj) {
      let keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] != "id") {
          employees[index][keys[i]] = obj[keys[i]];
        }
      }
    }
    res.send("Updated.");
  } else {
    res.send("Invalid employee ID!");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
