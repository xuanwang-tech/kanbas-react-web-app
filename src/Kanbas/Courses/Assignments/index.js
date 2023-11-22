import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaGripVertical, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical, FaSortDown, FaPlus } from "react-icons/fa6";
import AssignmentButton from "./AssignmentButton.js";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import DeleteDialog from "./DeleteDialog.js";
import {findAssignmentsForCourse} from "./client";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) => {
        dispatch(setAssignments(assignments));
      })
  }, [courseId]);
  

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleDelete = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
      setShowDeleteDialog(false);
    });
  };

  return (
    <div className="col-10 mx-5">
      <AssignmentButton/>
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
          assignments.map((assignment) => (
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
                onClick={() => handleDelete(assignment)}
              >
                Delete
              </button>
              {showDeleteDialog && (
                <DeleteDialog
                  assignment={selectedAssignment}
                  handleConfirmDelete={handleDeleteAssignment}
                  handleCancelDelete={handleCancelDelete}
                />
              )}

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
