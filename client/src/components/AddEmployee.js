import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const AddEmployee = ({
  employees,
  onChangeForm,
  addEmployee,
  fetchAllEmployees,
  updateManager,
}) => {
  React.useEffect(fetchAllEmployees, []);

  return (
    <div className="container add-emp-comp">
      <div className="row">
        <div className="col-md-12 mrgnbtm">
          <h2>Add Employee</h2>
          <form>
            <div className="row mrgnbtm">
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mrgnbtm">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Select Manager</label>
                <Typeahead
                  id="tp"
                  labelKey="firstName"
                  onChange={(selected) => {
                    updateManager(selected);
                  }}
                  options={employees}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={(e) => addEmployee()}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
