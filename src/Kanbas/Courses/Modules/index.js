import ModuleList from "./ModuleList";
import "./index.css";
import React from "react";

import { FaPlus, FaEllipsisV } from "react-icons/fa";


function Modules() {
  return (
      <div class="container">
          <div class="row">
              {/* <h2>Modules</h2> */}
          </div>
          <div class="row pb-2 border-bottom">
              <div class="d-flex flex-row justify-content-end">
                  <button class="btn btn-light m-1">Collapse All</button>
                  <button class="btn btn-light m-1">View Progress</button>
                  <select class="form-select m-1 w-30" name="publish" id="publish" style={{
                      width: "160px",
                  }}>
                      <option value="publish-all">Publish All</option>
                      <option value="publish-all-modules">Publish all modules and items</option>
                      <option value="publish-modules-only">Publish modules only</option>
                      <option value="unpublish">Unpublish all modules and items</option>
                  </select>
                  <button class="btn btn-danger m-1">{<FaPlus className="wd-icon" />} Module</button>
                  <button class="btn btn-light m-1">{<FaEllipsisV className="wd-icon" />}</button>
              </div>
          </div>

          <div class="row mt-4">
              <ModuleList />
          </div>
      </div>
  );
}
export default Modules;

