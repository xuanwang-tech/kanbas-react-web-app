import db from "../Database";
import { Navigate, Route, Routes, useParams  } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import React from "react";
import '../../index.css';
import "./index.css";
import CourseNav from "./CourseNav";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        // 
        <div>
            <CourseNav />
            <hr className="mb-3" />
            <div>
                <CourseNavigation />
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "70px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;

