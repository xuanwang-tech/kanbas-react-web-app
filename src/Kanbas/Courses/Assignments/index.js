import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus, FaEllipsisV, FaCaretDown, FaCheckCircle } from "react-icons/fa";
import db from "../../Database";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <div class="container">
            <div class="row pb-2 border-bottom">
                <div class="d-flex flex-row justify-content-between">
                    <input type="search" name="search-assignment" id="search-assignment" placeholder="Search for Assignment" />
                    <span>
                        <button class="btn btn-light m-1">{<FaPlus className="wd-icon" />} Group</button>
                        <button class="btn btn-danger m-1">{<FaPlus className="wd-icon" />} Assignment</button>
                        <button class="btn btn-light m-1">{<FaEllipsisV className="wd-icon" />}</button>
                    </span>
                </div>
            </div>

            <div class="row mt-4">
                <h2>Assignments for course {courseId}</h2>
                <div className="list-group mt-3">
                    {courseAssignments.map((assignment) => (
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item list-group-item-secondary mb-4">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <span>
                                    {<FaCaretDown className="wd-icon" />}{assignment.title}
                                </span>
                                <span>
                                    {<FaCheckCircle className="wd-icon" />} {<FaPlus className="wd-icon" />} {<FaEllipsisV className="wd-icon" />}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Assignments;