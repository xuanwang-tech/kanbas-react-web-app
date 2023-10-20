import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"]

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="list-group wd-course-navigation">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item bg-transparent wd-course-navigation-item ${pathname.includes(link) && "active wd-active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    )
}

export default CourseNavigation;