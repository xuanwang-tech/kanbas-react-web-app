import db from "../Database";
import { Navigate, Route, Routes, useParams, useLocation  } from "react-router-dom";
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
import { FaBars, FaGlasses } from "react-icons/fa";

function Courses({courses}) {
    const { courseId } = useParams();
    // const course = db.courses.find((course) => course._id === courseId);
    // return (
    //     // 
    //     <div>
    //         <CourseNav />
    //         <hr className="mb-3" />
    //         <div>
    //             <CourseNavigation />
    //             <div
    //                 className="overflow-y-scroll position-fixed bottom-0 end-0"
    //                 style={{
    //                     left: "320px",
    //                     top: "70px",
    //                 }}
    //             >
    //                 <Routes>
    //                     <Route path="/" element={<Navigate to="Home" />} />
    //                     <Route path="Home" element={<Home/>} />
    //                     <Route path="Modules" element={<Modules/>} />
    //                     <Route path="Assignments" element={<Assignments />} />
    //                     <Route
    //                         path="Assignments/:assignmentId"
    //                         element={<AssignmentEditor/>}
    //                     />
    //                     <Route path="Grades" element={<Grades />} />
    //                 </Routes>
    //             </div>
    //         </div>

    //     </div>
    // );
    const { pathname } = useLocation();
    const [empty, kanbas, id, screen] = pathname.split("/");
    const course = courses.find((course) => course._id === courseId);
  return (
    <div className="main-container">
      <div className="courses-header-section">
        <div style={{ "display": "flex" }}>
          <FaBars className="course-menu-icon" />
          <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
            <ol style={{ marginBottom: "0" }} className="breadcrumb">
              <li className="breadcrumb-item breadcrumb-item-color">
                {course.name}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {screen}
              </li>
            </ol>
          </nav>
        </div>
        <div>
          <button type="button" className="btn btn-secondary student-view ms-2">
            <FaGlasses className="me-2" />Student View
          </button>
        </div>
      </div>
      <hr className="no-margin" />
      <CourseNavigation />
      <div className="overflow-y-scroll position-fixed bottom-0 end-0 course-container" style={{
        left: "320px",
        top: "90px",
      }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="Grades" element={<Grades />} />
          {/* <Route path="Quizzes" element={<WIP />} />
          <Route path="Piazza" element={<WIP />} />
          <Route path="People" element={<WIP />} />
          <Route path="Panopto Video" element={<WIP />} />
          <Route path="Zoom Meetings" element={<WIP />} />
          <Route path="Announcements" element={<WIP />} />
          <Route path="Discussions" element={<WIP />} />
          <Route path="Pages" element={<WIP />} />
          <Route path="Files" element={<WIP />} />
          <Route path="Rubrics" element={<WIP />} />
          <Route path="Outcomes" element={<WIP />} />
          <Route path="Collaborations" element={<WIP />} />
          <Route path="Syllabus" element={<WIP />} />
          <Route path="Settings" element={<WIP />} />
          <Route path="Progress Reports[EAB Navigate]" element={<WIP />} /> */}
        </Routes>
      </div>
    </div>
  );
}
export default Courses;

