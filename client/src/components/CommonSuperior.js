import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const CommonSuperior = ({ employees, findCommonManager, commonManager }) => {
    const [selectionOne, setSelectionOne] = useState(0);
    const [selectionTwo, setSelectionTwo] = useState(0);

  return (
    <div className="container comm-mngr">
      <div className="col-md-12 mrgnbtm">
        <h2>Find Common Manager</h2>
        <form>
          <div className="row">
            <div className="form-group col-md-6 mrgnbtm">
              <label>Select Employee 1</label>
              <Typeahead
                id="tp"
                labelKey="firstName"
                onChange={(selected) => {
                    setSelectionOne(selected);
                }}
                options={employees}
              />
            </div>
            <div className="form-group col-md-6 mrgnbtm">
              <label>Select Employee 2</label>
              <Typeahead
                id="tp"
                labelKey="firstName"
                onChange={(selected) => {
                    setSelectionTwo(selected);
                }}
                options={employees}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={(e) => findCommonManager(selectionOne, selectionTwo)}
              className="btn btn-primary mrgnbtm"
            >
              Find
            </button>
          </div>
        </form>
        {(commonManager.firstName) ? <div className="lr-blue">Common Manager is: {commonManager.firstName} {commonManager.lastName}</div>: ''}
        
      </div>
    </div>
  );
};

export default CommonSuperior;
