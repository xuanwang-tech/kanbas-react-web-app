import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from 'react-icons/fa6';
import { FaGripVertical, FaPlus, FaCheckCircle, FaFileSignature, FaSortDown } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  setAssignment,
  updateAssignment
} from './assignmentsReducer';


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

  const { courseId, assignmentId } = useParams();
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignment = useSelector(state => 
    state.assignmentsReducer.assignments.find(a => a._id === assignmentId)
  ) || {
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    due: "",
    available: "",
    until: "",
  };

   const [editedAssignment, setEditedAssignment] = useState(assignment);

  useEffect(() => {
    setEditedAssignment(assignment);
  }, [assignment]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAssignment(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    
    if (!assignmentId || assignmentId === 'new') {
      dispatch(updateAssignment({ ...editedAssignment, _id: undefined })); 
    } else {
      dispatch(updateAssignment(editedAssignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


return (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h2>Edit Assignment</h2>
    <form>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          id="assignmentTitle"
          name="title"
          value={editedAssignment.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          id="assignmentDescription"
          name="description"
          rows="3"
          value={editedAssignment.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Points</label>
        <input
          type="text"
          className="form-control"
          id="assignmentTitle"
          name="points"
          value={editedAssignment.points}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          id="assignmentDueDate"
          name="dueDate"
          value={editedAssignment.dueDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Available From Date</label>
        <input
          type="date"
          className="form-control"
          id="assignmentAvailableFromDate"
          name="availableFromDate"
          value={editedAssignment.availableFromDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="assignmentAvailableUntilDate">Available Until Date</label>
        <input
          type="date"
          className="form-control"
          id="assignmentAvailableUntilDate"
          name="availableUntilDate"
          value={editedAssignment.availableUntilDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group text-right mt-3">
        <button type="button" className="btn btn-secondary mr-2" onClick={handleCancel}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    </form>
  </div>
);
}


export default AssignmentEditor;