import db from "../Database";
import Course from "./course";
import "./index.css";

import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <hr />
//       <h2>Published Courses ({courses.length})</h2>
//       <div class="row row-cols-1 row-cols-md-3 g-4">
//         <div className="col">
//           {courses.map((course, index) => (
//             <div class="card h-100">
//               <img src="/images/react.png" class="card-img-top" alt="..." />
//               <div class="card-body">
//                 <h5 class="card-title">{course.name}</h5>

//                 <Link
//                   key={course._id}
//                   to={`/Kanbas/Courses/${course._id}`}
//                   className="btn btn-primary"
//                 >
//                   {course.name}
//                 </Link>
//                 <p class="card-text">
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
return (
    <div className="mx-xs-1 mx-md-2 mx-lg-3 flex-grow-1">
        <h1>Dashboard</h1>
        <hr />
        <div className="ms-md-3">
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start" id="wd-course-cards-container">
                {courses.map((course) => {
                    return (
                        <Course course={course} />
                    )
                }
                )}
            </div>
        </div>

    </div>
);
}

export default Dashboard; 