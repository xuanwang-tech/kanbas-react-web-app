// import db from "../../Database";
// import { useParams } from "react-router-dom";
// import { FaFileImport, FaFileExport, FaSortDown } from 'react-icons/fa6';
// import { FaCog, FaSearch, FaFilter } from "react-icons/fa";
// import "./index.css";

// function Grades() {
//   const { courseId } = useParams();
//   const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
//   const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
//   return (
//     <div className="col content-section grades-section ms-3 me-3">
//       <div className="mb-3">
//         <span className="red-color"><strong>Gradebook</strong><FaSortDown className="ms-1 mb-2" /></span>
//         <button type="button" className="btn btn-secondary custom-btn float-end ms-2"><FaCog className="mb-1" /></button>
//         <div className="dropdown float-end">
//           <button className="btn btn-secondary custom-btn dropdown-toggle ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             <FaFileExport className="mb-1 me-1" />
//             Export
//           </button>
//           <ul className="dropdown-menu">
//             <li>Action</li>
//             <li>Another action</li>
//             <li>Something else here</li>
//           </ul>
//         </div>
//         <button type="button" className="btn btn-secondary custom-btn float-end ms-2"><FaFileImport className="mb-1 me-1" />Import</button>
//       </div>
//       <div className="search-container">
//         <div className="dropdown drop-container me-2">
//           <label for="studentNameDrop" className="form-label"><strong>Student Names</strong></label>
//           <button id="studentNameDrop" className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             <FaSearch className="me-1" />
//             <div className="btn-text">Search Students</div>
//           </button>
//           <ul className="dropdown-menu">
//             <li>Action</li>
//             <li>Another action</li>
//             <li>Something else here</li>
//           </ul>
//         </div>
//         <div className="dropdown drop-container ms-2">
//           <label for="assignNameDrop" className="form-label"><strong>Assignment Names</strong></label>
//           <button id="assignNameDrop" className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             <FaSearch className="me-1" />
//             <div className="btn-text">Search Assignments</div>
//           </button>
//           <ul className="dropdown-menu">
//             <li>Action</li>
//             <li>Another action</li>
//             <li>Something else here</li>
//           </ul>
//         </div>
//       </div>
//       <button type="button" className="custom-btn btn btn-secondary mt-3"><FaFilter className="me-1" />Apply Filters</button>
//       <div className="table-responsive mt-3">
//         <table className="table table-bordered table-striped grades-table">
//           <thead>
//             <tr className="table-data-align">
//               <th scope="col">Student Name</th>
//               {assignments.map((assignment) => (<th scope="col">{assignment.title}</th>))}
//             </tr>
//           </thead>
//           <tbody>
//             {enrollments.map((enrollment) => {
//               const user = db.users.find((user) => user._id === enrollment.user);
//               return (
//                 <tr className="table-data-align">
//                   <th scope="row">{user.firstName} {user.lastName}</th>
//                   {assignments.map((assignment) => {
//                     const grade = db.grades.find(
//                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
//                     return (<td>{grade?.grade || ""}</td>);
//                   })}
//                 </tr>);
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>);
// }
// export default Grades;

import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;