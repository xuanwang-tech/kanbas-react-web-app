import db from "../Database";
import Course from "./course";
import "./index.css";
import { React, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

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
const [showForm, setShowForm] = useState(false);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    background: "rgb(96, 228, 228)"
  })

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  const addCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }])
    setShowForm(false);
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
    setShowForm(false);
  };

  return (
    <div className="main-container">
      <div className="page-title">
        Dashboard
        <Link to={`/Labs`}>
          <button type="button" className="btn btn-danger float-end ms-2">Labs</button>
        </Link>
      </div>
      <hr />
      <div className="courses-container">
        <div className="published-courses">Published Courses ({courses.length})</div>
        <hr />
        <button type="button" className="btn btn-danger custom-btn ms-2"
          onClick={() => {
            toggleForm();
          }}>
          Add New Course
        </button>
        <div className="split-dashboard-container">
          <div className="d-flex row flex-row flex-wrap card-container">
            {courses.map((course, index) => (
              <div id={course.id} className="col-2 card">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
                  <div className="card-image" style={{ "background-color": course.background }}>
                    <FaEllipsisV className="icon fa-ellipsis-v" />
                  </div>
                  <div className="card-details">
                    <h5 className="card-custom-title text-nowrap">
                      {course.number} {course.name}
                    </h5>
                    <div className="card-text card-custom-text">
                      {course.startDate}
                      <div className="text-nowrap">
                        {course.endDate} 2022 Semester Full Term Grad
                      </div>
                    </div>
                    <div className="course-card-actions mt-3">
                      <button type="button" className="btn btn-secondary custom-btn"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                          setShowForm(true);
                        }}>
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger custom-btn"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {showForm && <div className="course-form">
            <h3>Course Form</h3>
            <input value={course.name} className="form-control mb-3"
              onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control mb-3"
              onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control mb-3" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control mb-3" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <div className="course-card-actions mt-3">
              <button type="button" className="btn btn-secondary custom-btn"
                onClick={() => {
                  addCourse();
                }}>
                Add Course
              </button>
              <button type="button" className="btn btn-secondary custom-btn"
                onClick={() => {
                  updateCourse();
                }}>
                Update Course
              </button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 