import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BiBook, BiCalendar } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";import { TfiDashboard } from "react-icons/tfi";
import { SlEnvolopeLetter, SlClock } from "react-icons/sl";
import { TbPresentationAnalytics } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";


import "./index.css";


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
    "Account": <BiUserCircle className="wd-icon" />,
    "Dashboard": <RiDashboard3Fill className="wd-icon" />,
    "Courses": <FaBook className="wd-icon" />,
    "Calendar": <BiCalendar className="wd-icon" />,
    "Inbox": <SlEnvolopeLetter className="wd-icon" />,
    "History": <SlClock className="wd-icon" />,
    "Studio": <TbPresentationAnalytics className="wd-icon" />,
    "Commons": <IoArrowForwardCircleOutline className="wd-icon" />,
    "Help": <AiOutlineQuestionCircle className="wd-icon" />,
}
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
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
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
