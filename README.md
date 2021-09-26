# employee-dp-app

<h2>Prerequisite:</h2>
<ul>
<li>NodeJS v12.18.1</li>
</ul>


<h2>Starting the app:</h2>

<ol>
<li>npm install</li>
<li>npm start</li>
<li>cd client</li>
<li>npm install</li>
<li>npm start</li>
</ol>

<h2>Troubleshoot</h2>
<div>
client/node_modules/terser-webpack-plugin/node_modules/p-limit/index.js:29
		} catch {}
		        ^

SyntaxError: Unexpected token {
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)

</div>

<h3>Solution: </h3>Please make sure node v12.18.1 is installed and is in use.

<h3>Client app will run on http://localhost:3000</h2> 
<h3>API will run on http://localhost:3001</h2> 

<h1>API endpoints:</h1>
<h2>Create Employee</h2>
<h4>POST http://localhost:3001/api/employees</h4>
<div>BODY:
  {
    "employee": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "jd@company.com"
    }
}
</div>

<h2>Get All Employees</h2>
<h4>GET http://localhost:3001/api/employees</h4>
<div>RESPONSE:
  [
    {
        "firstName": "Employee1",
        "lastName": "One",
        "email": "emp1@company.com",
        "id": 1
    },
    {
        "firstName": "Employee2",
        "lastName": "Two",
        "email": "emp2@company.com",
        "manager": 1,
        "id": 2
    },
    {
        "firstName": "Employee3",
        "lastName": "Three",
        "email": "emp3@company.com",
        "manager": 1,
        "id": 3
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "jd@company.com",
        "id": 4
    }
]
}
</div>

<h2>Get Employeee by ID</h2>
<h4>GET http://localhost:3001/api/employees/1</h4>
<div>RESPONSE:
  {
        "firstName": "Employee1",
        "lastName": "One",
        "email": "emp1@company.com",
        "id": 1
    }
</div>

<h2>Get All Managers of an Employee</h2>
<h4>GET http://localhost:3001/api/employees/3/managers</h4>
<div>RESPONSE:
  [
    {
        "firstName": "Emp1",
        "lastName": "",
        "email": "emp1@company.com",
        "manager": 1,
        "id": 2
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "jd@company.com",
        "id": 1
    }
]
</div>

<h2>Get All Reportees of an Employee</h2>
<h4>GET http://localhost:3001/api/employees/2/reportees</h4>
<div>RESPONSE:
  [{
        "firstName": "Employee1",
        "lastName": "One",
        "email": "emp1@company.com",
        "id": 1
    }]
</div>

<h2>Get Common Manager of Two Employeees</h2>
<h4>GET http://localhost:3001/api/lca/3/4</h4>
<div>RESPONSE:
  {
        "firstName": "Employee1",
        "lastName": "One",
        "email": "emp1@company.com",
        "id": 1
    }
</div>

<h2>Update Employee</h2>
<h4>POST http://localhost:3001/api/employees/1</h4>
<div>Request Body:
  {
    "update": {
        "lastName": "Kumar"
    }
}
</div>
