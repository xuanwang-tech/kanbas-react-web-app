import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiExit, BiHelpCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaInbox, FaDesktop } from "react-icons/fa";
import { BsFillCalendar2WeekFill, BsClockHistory } from "react-icons/bs";

import "./index.css";
function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon text-white" />,
    Dashboard: <RiDashboard3Fill className="wd-icon text-danger" />,
    Courses: <FaBook className="wd-icon text-danger" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon text-danger" />,
    Inbox: <FaInbox className="wd-icon text-danger" />,
    History: <BsClockHistory className="wd-icon text-danger" />,
    Studio: <FaDesktop className="wd-icon text-danger" />,
    Commons: <BiExit className="wd-icon text-danger" />,
    Help: <BiHelpCircle className="wd-icon text-danger" />,
  };

  const { pathname } = useLocation();
  return (
    <div
      className="list-group wd-kanbas-navigation"
      style={{ width: 150 }}
    >
      <Link key={9} to='/Kanbas/Dashboard' className='list-group-item d-flex flex-column neu'>
                    <img className="img-fluid" src={require("./neulogo.jpg")} alt="NU Logo" />
                </Link>
     
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
