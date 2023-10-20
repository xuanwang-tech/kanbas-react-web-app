import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaCaretDown } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { BiRadio, BiFilterAlt } from "react-icons/bi";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div class="container">
            <div class="row pb-2 ">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <span style={{ color: "red" }}>GradeBook {<FaCaretDown className="wd-icon" />}</span>

                    <span>
                        {<BiRadio />}
                        <button class="btn btn-light m-1">{<FaFileImport className="wd-icon" />} Import</button>
                        <button class="btn btn-light m-1">{<FaFileExport className="wd-icon" />} Export {<FaCaretDown className="wd-icon" />}
                        </button>
                        <button class="btn btn-light m-1">{<BsGear className="wd-icon" />}</button>
                    </span>
                </div>
            </div>

            <div class="row  ">
                <div class="container">


                    <div class="row mb-0">
                   
                        <span>
                            <button class="btn btn-light mt-2">
                                {<BiFilterAlt />}
                                Apply Filters
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <div class="row pb-2 mb-1">
               
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (<th className="text-center">{assignment.title}</th>))}
                        </thead>
                        <tbody>
                            {enrollments.map((enrollment) => {
                                const user = db.users.find((user) => user.role === "STUDENT" && user._id === enrollment.user);
                                if (user) {
                                    return (
                                        <tr>
                                            <td className="text-danger">{user.firstName} {user.lastName}</td>
                                            {assignments.map((assignment) => {
                                                const grade = db.grades.find(
                                                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                                return (<td className="text-center">{grade?.grade || ""}</td>);
                                            })}
                                        </tr>);
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
}
export default Grades;
