import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./users/signin";
import { Link } from "react-router-dom";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <br />
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/account" className="list-group-item">
              Account
            </Link>
            <Link to="/project/search" className="list-group-item">
              Search
            </Link>
            {/* <Link to="/project/admin/users" className="list-group-item">
              Users
            </Link> */}
            {/* <Link to="/project/admin/users" className="btn btn-warning w-100">
              Users
            </Link> */}
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;
