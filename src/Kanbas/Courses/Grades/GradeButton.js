import React from "react";
import {
  FaCaretDown,
  FaKeyboard,
  FaFileImport,
  FaFileExport,
  FaGear,
  FaFilter,
} from "react-icons/fa6";

function GradeButton() {
  return (
    <div className="col-10">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-danger">
            Gradebook
            <FaCaretDown className="ms-2" />
          </div>
          <div className="d-flex align-items-center text-danger ms-5">
            <FaKeyboard />
          </div>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-light border border-secondary-subtle me-2"
            >
              <FaFileImport className="me-2" />
              Import
            </button>
            <button
              type="button"
              className="btn btn-light border border-secondary-subtle me-2"
            >
              <FaFileExport className="me-1" />
              Export
            </button>
            <button
              type="button"
              className="btn btn-light border border-secondary-subtle ms-1"
            >
              <FaGear />
            </button>
          </div>
        </div>
      </div>

      <div className="container px-0 pt-4">
        <div className="row ">
          <div className="col mb-3">
            <h6>
              <strong>Student Name</strong>
            </h6>
            <select className="form-select">
              <option selected> Search Students</option>
            </select>
          </div>
          <div className="col mb-3">
            <h6>
              <strong>Assignments Name</strong>
            </h6>
            <select className="form-select">
              <option selected>Search Assignments</option>
            </select>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-light">
        <FaFilter className="me-2" />
        Apply Filters
      </button>
    </div>
  );
}

export default GradeButton;
