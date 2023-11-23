import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import './index.css';
import '../../index.css'

function CourseTopNavigation() {

    const { courseId } = useParams();

    return (
        <nav aria-label="breadcrumb" className="d-flex align-items-center">
            <RxHamburgerMenu className="m-3 mb-0 wd-link-red" />
            <ol className="breadcrumb m-3 mb-0">
                <li className="breadcrumb-item">
                    <Link key={courseId} className='wd-link-red'>
                        {courseId}
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {extractCourseNavTabFromUrl()}
                </li>
            </ol>
        </nav>
    )
}

// This function will return the specific tab in the course navigation that the user is currently on. (i.e., Home, Modules, Piazza, etc.)
function extractCourseNavTabFromUrl() {
    // Get the current url hash
    const url = window.location.hash;
    // Split the url by "/" to get an array of its segments
    const urlSegments = url.split("/");
    // Find the index of the "Courses" segment
    const coursesIndex = urlSegments.findIndex((segment) => segment === "Courses");
    // Check if courses is in the URL and there's at least one segment (i.e., courseId after it)
    if (coursesIndex != -1 && coursesIndex + 2 < urlSegments.length) {
        return urlSegments[coursesIndex + 2].toString();
    } else {
        return "";
    }
}



export default CourseTopNavigation;