import React from "react";
import {
  FaCheckCircle,
  FaFileImport,
  FaFileExport,
  FaBullseye,
  FaEye,
  FaBullhorn,
  FaBell,
} from "react-icons/fa";
import { FaCalendarDays, FaChartSimple, FaBan } from "react-icons/fa6";

const statusButtons = [
  { icon: <FaFileImport />, text: "Import Existing Content" },
  { icon: <FaFileExport />, text: "Import From Commons" },
  { icon: <FaBullseye />, text: "Choose Home Page" },
  { icon: <FaChartSimple />, text: "View Course Stream" },
  { icon: <FaEye />, text: "View Course Stream" },
  { icon: <FaBullhorn />, text: "New Announcement" },
  { icon: <FaChartSimple />, text: "New Analytics" },
  { icon: <FaBell />, text: "View Course Notifications" },
];

const lectures = [
  { date: "Sep 7 at 11:45am", text: "CS4550.12631.202410" },
  { date: "Sep 9 at 9:45am", text: "CS5610.11744.202310" },
  { date: "Sep 10 at 12:45am", text: "CS5001.12631.202410" },
];

function Home() {
  return (
    <div>
      <div>
        <h5>Course Status</h5>
        <div className="d-flex">
          <button type="button" className="btn btn-light text-black me-1">
            <div className="d-flex align-items-center">
              <FaBan className="me-1 fa-sm" />
              Unpublish
            </div>
          </button>
          <button type="button" className="btn btn-success">
            <div className="d-flex align-items-center">
              <FaCheckCircle className="me-1 text-white fa-sm" />
              Published
            </div>
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <div className="list-group">
            {statusButtons.map((button, index) => (
              <div key={index} className="pt-1">
                <div className="list-group-item list-group-item-action btn bg-light me-5">
                  {button.icon && <span className="me-2">{button.icon}</span>}
                  <small>{button.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col">
        <div className="my-3 d-flex justify-content-between align-items-center">
          <small>Coming Up</small>
          <div className="ms-5 text-danger text-decoration-none">
            <FaCalendarDays className="me-2" />
            <small>View Calendar</small>
          </div>
        </div>
        <hr />
        <div className="list-group">
          {lectures.map((lecture, index) => (
            <div key={index} className="d-flex align-items-center mt-3">
              <div className="col-auto mb-5">
                <FaCalendarDays className="text-danger" />
              </div>
              <div className="col ms-3 pb-2">
                <div className="text-danger text-decoration-none">Lecture</div>
                <small>{lecture.text + " " + lecture.date}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
