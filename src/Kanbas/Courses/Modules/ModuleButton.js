import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function ModuleButton() {
  return (
    <div>
      <div className="row justify-content-end">
        <div className="col-auto pe-0 ms-5">
          <button
            type="button"
            className="btn btn-light border border-secondary-subtle"
          >
            Collapse All
          </button>
        </div>
        <div className="col-auto pe-0">
          <button
            type="button"
            className="btn btn-light border border-secondary-subtle"
          >
            View program
          </button>
        </div>
        <div className="col-auto pe-0">
          <Dropdown>
            <Dropdown.Toggle
              as={Button}
              variant="light border border-secondary-subtle"
            >
              <FaRegCheckCircle className="mb-1 me-1 text-success" /> Publish
              All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">
                Publish All modules and items
              </Dropdown.Item>
              <Dropdown.Item href="#">Publish modules only</Dropdown.Item>
              <Dropdown.Item href="#">Unpublish All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-auto pe-0">
          <button type="button" className="btn btn-danger">
            <FaPlus className="mb-1 me-1 text-white" /> Module
          </button>
        </div>
        <div className="col-auto pe-2">
          <button
            type="button"
            className="btn btn-light border border-secondary-subtle"
          >
            <FaEllipsisV className="mb-1" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ModuleButton;
