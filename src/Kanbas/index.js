// import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";

import db from "./Database";
import store from "./store";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Provider } from "react-redux";
import axios from "axios";
// import CourseNavigation from "./CourseNavigation";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

    const [showForm, setShowForm] = useState(false);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        background: "rgb(96, 228, 228)"
    })

    const addCourse = async() => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
        setCourse({ name: "", number: "", startDate: "", endDate: "" });
    }

    const deleteCourse = async(courseId) => {
        const response = await axios.delete( `${URL}/${course._id}`);
      setCourses(courses.filter(
        (c) => c._id !== course._id));
  
    }

    const updateCourse = async() => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
          );
      
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                } else {
                    return c;
                }
            })
        );
        setShowForm(false);
    };
    return (
        <Provider store={store}>
            <div className="row outer-container">
                <KanbasNavigation />
                <div className="col second-container">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Courses" element={<Navigate to="RS101/Home" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                showForm={showForm}
                                setShowForm={setShowForm}
                            />} />
                        <Route path="Courses/:courseId/*" element={
                            <Courses courses={courses} />} />
                            <Route path="Calendar" element={<h1>Calendar</h1>} />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />
                            <Route path="History" element={<h1>History</h1>} />
                            <Route path="Studio" element={<h1>Studio</h1>} />
                            <Route path="Commons" element={<h1>Commons</h1>} />
                            <Route path="Help" element={<h1>Help</h1>} />
                      
                    </Routes>
                </div>
            </div>
        </Provider>
    );
    // return(
   
    //   <div className="d-flex">
    //      <KanbasNavigation />
    //   <div>
    //   <div className="flex-grow-1">
    //             <Routes>
    //                 <Route path="/" element={<Navigate to="Dashboard" />} />
    //                 <Route path="Account" element={<h1>Account</h1>} />
    //                 <Route path="Dashboard" element={<Dashboard />} />
    //                 <Route path="Courses/:courseId/*" element={<Courses />} />
    //             </Routes>
    //         </div>
    //   </div>
    // </div>

    // );
 }
 export default Kanbas;
 