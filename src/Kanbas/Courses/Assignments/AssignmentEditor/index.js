import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from 'react-icons/fa6';
import { FaGripVertical, FaPlus, FaCheckCircle, FaFileSignature, FaSortDown } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment
} from '../assignmentsReducer';


function AssignmentEditor() {
  // const { assignmentId } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId);

  // const { courseId } = useParams();
  // const navigate = useNavigate();
  // const handleSave = () => {
  //   console.log("Actually saving assignment TBD in later assignments");
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // };
  // return (
  //   <div>
  //     <h2>Assignment Name</h2>
  //     <input value={assignment.title}
  //            className="form-control mb-2" />
  //     <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
  //           className="btn btn-danger">
  //       Cancel
  //     </Link>
   
  //     <button onClick={handleSave} className="btn btn-success me-2">
  //       Save
  //     </button>
  //   </div>
  // );

  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openAssignmentEditor = () => {
    dispatch(setAssignment({ name: "New Assignment", description: "New Description", course: courseId, dueDate: '', availFrom: '', availUntil: '' }))
    navigate(`/Kanbas/Courses/${courseId}/Assignments/newAssignment`);
  };

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="col content-section module-list">
      <div className="search-container mb-3">
        <input
          type="text"
          className="form-control w-25"
          id="searchAssignment"
          placeholder="Search for Assignment"
        />
        <div className="modules-action-container">
          <button type="button" className="btn btn-secondary float-end ms-2">+ Group</button>
          <button type="button" className="btn btn-danger float-end ms-2"
            onClick={openAssignmentEditor}>+ Assignment</button>
          <button type="button" className="btn btn-secondary float-end ms-2 p-1">
            <FaEllipsisVertical /></button>
        </div>
      </div>
      <hr />
      <div className="list-group">
        <div class="list-group-item list-group-item-secondary">
          <FaGripVertical className="me-2" />
          <FaSortDown className="me-1 mb-2" />
          Assignments
          <FaEllipsisVertical className="me-2 mt-1 float-end" />
          <FaPlus className="me-2 mt-1 float-end" />
          <span class="float-end rounded-pill assignment-stat me-2">40% of Total</span>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assignment-row"
            onClick={() => {
              dispatch(setAssignment(assignment));
            }}>
            <div className="center-align">
              <FaGripVertical className="me-3" />
              <FaFileSignature className="green-color me-3" />
              <div>
                <strong>{assignment.name}</strong><br />
                {assignment.description}<br />
                <strong>Due</strong> {assignment.dueDate} at 11:59pm | 100pts
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-danger custom-btn me-2 ms-1 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(setAssignment(assignment));
                }}>
                Delete
              </button>
              <FaEllipsisVertical className="me-2 mt-1 float-end" />
              <FaCheckCircle className="green-color me-2 mt-1 float-end" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default AssignmentEditor;