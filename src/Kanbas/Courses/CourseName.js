import React, {useEffect}from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import db from "../Database";
import { FaGlasses } from "react-icons/fa";

function CourseName() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);

  
  return (
    <div className="d-none d-md-block">
      <div className="row align-items-center">
        <div className="col-auto">
          <button className="btn" type="button">
            <FaBars
              className="text-danger mt-2 ms-3"
              style={{ fontSize: "20px" }}
            />
          </button>
        </div>
        <div className="col ps-0 pt-1">
          <nav
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb pt-3">
              <li className="breadcrumb-item text-danger">{course.name}</li>
              <li className="breadcrumb-item active" aria-current="page">
                {screen}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-light border border-secondary-subtle float-end"
          >
            <FaGlasses className="me-2" />
            Student View
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseName;
