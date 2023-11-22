// import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import store from "./store";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Provider } from "react-redux";
import axios from "axios";
// import CourseNavigation from "./CourseNavigation";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  // const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

    // const [showForm, setShowForm] = useState(false);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
       
    })

    const addCourse = async() => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
        // setCourse({ name: "", number: "", startDate: "", endDate: "" });
    }

    // const deleteCourse = async(course) => {
    //     const response = await axios.delete( `${URL}/${course._id}`);
    //   setCourses(courses.filter(
    //     (c) => c._id !== course._id));
  
    // }
    const deleteCourse = async (courseId) => {
      const response = await axios.delete(`${URL}/${courseId}`);
  
      setCourses(courses.filter((course) => course._id !== courseId));
    };

    // const updateCourse = async(course) => {
    //     const response = await axios.put(
    //         `${URL}/${course._id}`,
    //         course
    //       );
      
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    //     setCourse({ name: "" });
    // };
    const updateCourse = async () => {
      const response = await axios.put(`${URL}/${course._id}`, course);
  
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
      setCourse({ name: "" });
    };
  

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />}
                        />
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );

 }
 export default Kanbas;
