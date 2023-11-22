// import { Navigate, Route, Routes, useParams, useLocation  } from "react-router-dom";
// import CourseNavigation from "./CourseNavigation";
// import React from "react";
// import '../../index.css';
// import "./index.css";
// import CourseNav from "./CourseNav";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/AssignmentEditor";
// import Grades from "./Grades";
// import { FaBars, FaGlasses } from "react-icons/fa";

// import { useState, useEffect } from "react";
// import axios from "axios";


// function Courses({}) {
//     const { courseId } = useParams();
//     const URL = "http://localhost:4000/api/courses";
//     const [course, setCourse] = useState({});
//   const findCourseById = async (courseId) => {
//     const response = await axios.get(
//       `${URL}/${courseId}`
//     );
//     setCourse(response.data);
//   };

//     const { pathname } = useLocation();
//     const [empty, kanbas, id, screen] = pathname.split("/");
    

//     useEffect(() => {
//       findCourseById(courseId);
//     }, [courseId]);
  
  
//   return (
//     <div>
//       <h1>
//         Courses {course.name} / {screen}
//       </h1>
//       <CourseNavigation />
//       <div>
//         <div
//           className="overflow-y-scroll position-fixed bottom-0 end-0"
//           style={{
//             left: "320px",
//             top: "50px",
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<Navigate to="Home" />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Modules" element={<Modules />} />
//             <Route path="Assignments" element={<Assignments />} />
//             <Route
//               path="Assignments/:assignmentId"
//               element={<AssignmentEditor />}
//             />
//             <Route path="Grades" element={<Grades />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Courses;
import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseName from "./CourseName";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  //"http://localhost:4000/api"
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api" ;
  const URL = `${API_BASE}/courses`;

  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  
  return (
    <div style={{ position: "relative" }}>
      <CourseName />
      <hr style={{ width: "86vw" }} />
      <div style={{ position: "relative", display: "flex" }}>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-absolute bottom-0 end-0"
          style={{
            left: "170px",
            top: "10px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;