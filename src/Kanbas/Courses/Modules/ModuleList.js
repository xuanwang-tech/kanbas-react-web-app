import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaPlus, FaSortDown, FaCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical } from 'react-icons/fa6';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  
return (
    <div class="list-group mt-3">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} class="list-group-item list-group-item-secondary mb-3 p-0">
              <div className="p-2">
                <FaGripVertical className="me-2" />
                <FaSortDown className="me-1 mb-2" />
                {module.name}
                <FaEllipsisVertical className="me-2 mt-1 float-end" />
                <FaPlus className="me-2 mt-1 float-end" />
                <FaCheckCircle className="green-color me-2 mt-1 float-end" />
              </div>
              {
                module.lessons && (
                  <div className="list-group">
                    {
                      module.lessons.map((lesson, index) => (
                        <div class="list-group-item ">
                          <div className="display-flex">
                            <FaGripVertical style={{ fontSize: "large" }} className="me-2 mt-1" />
                            <div>
                              {lesson.name}
                              <FaEllipsisVertical className="mt-1 float-end" />
                              <FaCheckCircle className="green-color me-2 mt-1 float-end" />
                              {/* <hr className="no-margin"/> */}
                              <div className="ms-5">{lesson.description}</div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          ))
      }
    </div>
  );
}
export default ModuleList;

