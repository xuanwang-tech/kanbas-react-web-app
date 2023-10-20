// import {Link} from "react-router-dom";

import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import CourseNavigation from "./CourseNavigation";

function Kanbas() {
    return(
   
      <div className="d-flex">
         <KanbasNavigation />
      <div>
      <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
      </div>
    </div>

    );
 }
 export default Kanbas;
 