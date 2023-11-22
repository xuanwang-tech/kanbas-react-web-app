import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisVertical, FaRegCalendarDays } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import * as client from "./client";

function AssignmentEditor() {
  const {assignmentId, courseId } = useParams(); 
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignmentId, assignment);
    dispatch(updateAssignment({ _id: assignmentId, ...assignment }));
  };

 const handleSave = async () => {
    if (!assignmentId) {
      await handleAddAssignment();
    } else {
      await handleUpdateAssignment();
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <div className="col-8 mx-5 mt-2">
        <div className="d-flex justify-content-end">
          <div className="me-2 text-success d-flex align-items-center">
            <FaCheckCircle className="me-1" />
            Published
          </div>
          <div className="me-0 d-flex align-items-center">
            <FaEllipsisVertical />
          </div>
        </div>
        <hr />
        <form>
          <div className="mb-2">
            <label htmlFor="name" className="col col-form-label">
              Assignments Name:
            </label>
            <div className="col">
              <input
                className="form-control w-100"
                value={assignment.title}
                id="name"
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, title: e.target.value })
                  )
                }
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="textarea1" className="col col-form-label">
              Assignment Description:
            </label>
            <div className="col">
              <textarea
                className="form-control"
                id="textarea1"
                rows="3"
                value={assignment.description}
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      description: e.target.value,
                    })
                  )
                }
              ></textarea>
            </div>
          </div>

          <div className="col-10 container-fluid">
            <div className="mb-3 row">
              <label htmlFor="points" className="col-4 text-end col-form-label">
                Points
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="points"
                  value={assignment.points}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, points: e.target.value })
                    )
                  }
                />
              </div>
            </div>
            <div>
              <div className="mb-3 row">
                <label htmlFor="assign" className="col-4 text-end col-form-label">
                  Assign
                </label>
                <div className="col border border-light-subtle p-2 mb-3 ms-2 mt-2">
                  <div className="row ms-0">
                    <label htmlFor="due" className="form-label mt-2">
                      Due
                    </label>
                  </div>
                  <div className="row ms-0">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="due"
                        value={assignment.due}
                        onChange={(e) =>
                          dispatch(
                            setAssignment({
                              ...assignment,
                              due: e.target.value,
                            })
                          )
                        }
                      />
                      <span className="input-group-text" id="due">
                        <FaRegCalendarDays />
                      </span>
                    </div>
                  </div>

                  <div className="row ms-0">
                    <div className="col">
                      <label htmlFor="ava" className="form-label">
                        Available from
                      </label>
                      <div className="row">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="ava"
                            aria-describedby="basic-addon2"
                            value={assignment.available}
                            onChange={(e) =>
                              dispatch(
                                setAssignment({
                                  ...assignment,
                                  available: e.target.value,
                                })
                              )
                            }
                          />
                          <span className="input-group-text" id="basic-addon2">
                            <FaRegCalendarDays />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="until" className="form-label">
                        Until
                      </label>
                      <div className="row">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="until"
                            aria-describedby="basic-addon1"
                            value={assignment.until}
                            onChange={(e) =>
                              dispatch(
                                setAssignment({
                                  ...assignment,
                                  until: e.target.value,
                                })
                              )
                            }
                          />
                          <span className="input-group-text" id="basic-addon1">
                            <FaRegCalendarDays />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-3 row ms-1">
            <div className="col d-flex justify-content-end mb-3">
              <button onClick={handleCancel} className="btn btn-light me-2">
               Cancel
              </button>
              <button onClick={handleSave} className="btn btn-danger me-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignmentEditor;
