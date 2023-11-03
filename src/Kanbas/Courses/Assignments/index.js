// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { FaPlus, FaEllipsisV, FaCaretDown, FaCheckCircle } from "react-icons/fa";
// import db from "../../Database";

// function Assignments() {
//     const { courseId } = useParams();
//     const assignments = db.assignments;
//     const courseAssignments = assignments.filter(
//         (assignment) => assignment.course === courseId);

//     return (
//         <div class="container">
//             <div class="row pb-2 border-bottom">
//                 <div class="d-flex flex-row justify-content-between">
//                     <input type="search" name="search-assignment" id="search-assignment" placeholder="Search for Assignment" />
//                     <span>
//                         <button class="btn btn-light m-1">{<FaPlus className="wd-icon" />} Group</button>
//                         <button class="btn btn-danger m-1">{<FaPlus className="wd-icon" />} Assignment</button>
//                         <button class="btn btn-light m-1">{<FaEllipsisV className="wd-icon" />}</button>
//                     </span>
//                 </div>
//             </div>

//             <div class="row mt-4">
//                 <h2>Assignments for course {courseId}</h2>
//                 <div className="list-group mt-3">
//                     {courseAssignments.map((assignment) => (
//                         <Link
//                             key={assignment._id}
//                             to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
//                             className="list-group-item list-group-item-secondary mb-4">
//                             <div class="d-flex flex-row justify-content-between align-items-center">
//                                 <span>
//                                     {<FaCaretDown className="wd-icon" />}{assignment.title}
//                                 </span>
//                                 <span>
//                                     {<FaCheckCircle className="wd-icon" />} {<FaPlus className="wd-icon" />} {<FaEllipsisV className="wd-icon" />}
//                                 </span>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Assignments;

import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Assignmentlogo from "./Assignmentlogo.js";
import { useSelector, useDispatch } from "react-redux";
import {addAssignment, deleteAssignment, setAssignment } from "./assignmentsReducer";


import { FaGripVertical, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical, FaSortDown, FaPlus } from "react-icons/fa6";



function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector(
      (state) => state.assignmentsReducer.assignments
    );
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId
    );
    const dispatch = useDispatch();
  
    const [toggle, setToggle] = useState(true);
  
    const handleClick = () => {
      setToggle(!toggle);
    };
   

  
    return (
      <div className="col-10 mx-5">
        <Assignmentlogo />
        <div className="list-group my-3">
          <div
            className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between fw-bold"
            onClick={handleClick}
          >
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2" />
              <FaSortDown className="mb-2 me-2" />
              Assignments
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <input
                id="text-fields-search"
                className="form-control form-control-sm w-50 me-2 rounded rounded-pill text-center bg-light"
                placeholder="40% of total"
                readOnly
              />
              <FaPlus className="me-4 mx-2" />
              <FaEllipsisVertical />
            </div>
          </div>
          {toggle &&
            courseAssignments.map((assignment) => (
              <div
                className="list-group-item d-flex align-items-center"
                style={{ borderLeft: "5px solid green" }}
                key={assignment._id}
              >
                <FaGripVertical className="me-3" />
                <FaClipboardList
                  className="me-3"
                  style={{ color: "green", fontSize: "20px" }}
                />
                <div style={{ flex: 1 }} className="ms-2">
                  <div className="d-flex justify-content-between align-items-center my-2 ">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="text-decoration-none text-black fw-bold"
                      onClick={() => dispatch(setAssignment(assignment))}
                    >
                      <h6 style={{ margin: "0" }}>{assignment.title}</h6>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "grey",
                      fontSize: "14px",
                    }}
                  >
                    <p style={{ margin: "0", color: "red" }}>
                      {assignment.description}
                    </p>
                    {assignment.available && (
                      <>
                        <p style={{ margin: "0", paddingLeft: "5px" }}>|</p>
                        <p style={{ margin: "0", paddingLeft: "5px" }}>
                          {assignment.available}
                        </p>
                      </>
                    )}
                    {assignment.until && (
                      <>
                        <p style={{ margin: "0", paddingLeft: "5px" }}>until</p>
                        <p style={{ margin: "0", paddingLeft: "5px" }}>
                          {assignment.until}
                        </p>
                      </>
                    )}
                    {assignment.due && (
                      <>
                        <p style={{ margin: "0", paddingLeft: "5px" }}>|</p>
                        <p style={{ margin: "0", paddingLeft: "5px" }}>
                          Due {assignment.due}
                        </p>
                      </>
                    )}
                    <p style={{ margin: "0", paddingLeft: "5px" }}>|</p>
                    <p style={{ margin: "0", paddingLeft: "5px" }}>
                      {assignment.points} points
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-danger me-2 "
                //   onClick={() => handleDelete(assignment)
                onClick={() => dispatch(deleteAssignment(assignment._id))
                }
                >
                  Delete
                </button>
            
  
                <FaCheckCircle
                  className="text-success me-4"
                  style={{ fontSize: "18px" }}
                />
                <FaEllipsisVertical />
              </div>
            ))}
        </div>
      </div>
    );
  }
export default Assignments;