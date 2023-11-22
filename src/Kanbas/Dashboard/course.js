// import { Link } from "react-router-dom";
// import { FaEllipsisV } from "react-icons/fa";
// import { PiNotePencil } from "react-icons/pi";
// import "../index.css"
// import "./course.css"

// const Course = ({
//     course = {
//         _id: "Unknown_id",
//         name: "Unknown_name",
//         number: "Unknown_number",
//         startDate: "Unknown_startDate",
//         endDate: "Unknown_endDate",
//     }
// }) => {
//     return (
//         // Single card in bootstrap card group
//         <div className="col">
//             <div className="card shadow-sm">
//                 {/* Course image with button at upper right corner */}
//                 <div className="card-img-top wd-course-solid-blue wd-course-img-height-125px d-flex flex-row">
//                     <button type="button"
//                         className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
//                         <FaEllipsisV />
//                     </button>
//                 </div>
//                 {/* Course info; card body */}
//                 <div className="card-body d-flex flex-column">
//                     <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link wd-card-link-no-decoration">
//                         <div className="wd-course-card-header-content-container">
//                             <h6 className="card-title wd-ellipsis">
//                                 {course.name}
//                             </h6>
//                             <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
//                             <p className="card-text wd-ellipsis">
//                                 {course.startDate} to {course.endDate}
//                             </p>
//                         </div>
//                     </Link>
//                     <Link key={course.number} to={"/Kanbas/Dashboard"} class="wd-course-card-icon-grey">
//                         <PiNotePencil />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Course;

import { React } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaRegPenToSquare } from "react-icons/fa6";

function Dashboard({ courses, course, setCourse, addCourse,
  deleteCourse, updateCourse }) {

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
                    {course.startDate} Semester Full Term
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