import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const Assignments_URL = "http://localhost:4000/api/assignments";

export const addAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};

export const updateAssignment = async (assignmentId, assignment) => {
    const response = await axios.put(`${Assignments_URL}/${assignmentId}`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`${Assignments_URL}/${assignmentId}`);
    return response.data;
};