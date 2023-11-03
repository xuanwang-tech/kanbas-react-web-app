import db from "../Database";
import Course from "./course";
import "./index.css";
import { React, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaRegPenToSquare } from "react-icons/fa6";

function Dashboard() {

    const [courses, setCourses] = useState(db.courses);
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
// return (
//     <div className="mx-xs-1 mx-md-2 mx-lg-3 flex-grow-1">
//         <h1>Dashboard</h1>
//         <hr />
//         <div className="ms-md-3">
//             <h2>Published Courses ({courses.length})</h2>
//             <hr />
//             <div class="row">
//         <div class="row row-cols-1 row-cols-md-5 g-4">
//           {courses.map((course, index) => (
//             <div class="col" style={{ width: 300 }}>
//               <div class="card">
//                 <img src="/images/react.png" class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">{course.name}</h5>

//                   <Link
//                     key={course._id}
//                     to={`/Kanbas/Courses/${course._id}`}
//                     className="btn btn-primary"
//                   >
//                     {course.name}
//                   </Link>
//                   <p class="card-text">
//                     This is a longer card with supporting text below as a
//                     natural lead-in to additional content. This content is a
//                     little bit longer.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//         </div>

//     </div>
// );

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    background: "rgb(96, 228, 228)"
  })


  const addCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }])
    
  }

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  }

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    
  };


return (
    <div className="ms-3">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="ms-3">Published Courses ({courses.length})</h2>
      <div className="ms-4 mt-4">
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-success me-2 mt-2" onClick={addCourse}>
          Add
        </button>
        <button className="btn btn-primary mt-2" onClick={updateCourse}>
          Update
        </button>
      </div>

      <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-3 g-4 mt-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="col ms-4 mt-4 mb-4"
            style={{ width: "260px" }}
          >
            <div className="card h-100">
              <div style={{ backgroundColor: "#3eafbb", height: "150px" }}>
                <FaEllipsisVertical className=" text-white float-end mt-4 me-3" />
              </div>
              <div className="card-body">
                <Link to={`/Kanbas/Courses/${course._id}`}>
                  <h5
                    className="card-title text-truncate text-decoration-none d-inline-block text-dark"
                    style={{
                      width: "200px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {course.name}
                  </h5>
                </Link>
                <p className="card-text">
                  {course.number}
                  <br />
                  <small>
                    {course.startDate.replace(/-/, "")} Semester Full Term
                  </small>
                </p>
                <FaRegPenToSquare
                  className="ms-1"
                  style={{ fontSize: "22px" }}
                />
                <button
                  className="btn btn-danger float-end "
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning float-end mb-1 me-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard; 