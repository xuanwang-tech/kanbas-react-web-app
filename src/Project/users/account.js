import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async (id) => {
    try {
      if (id) {
        const account = await client.findUserById(id);
        setAccount(account);
      } else {
        const account = await client.account();
        console.log(account);
        setAccount(account);
      }
    } catch (err) {
      navigate("/project/signin");
    }
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    fetchAccount(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (isoString) => {
    if (!isoString) {
      return "1970-01-01";
    }
    const date = new Date(isoString);
    let year = date.getFullYear().toString();
    let month = String(date.getMonth() + 1)
      .padStart(2, "0")
      .toString();
    let day = String(date.getDate()).padStart(2, "0").toString();
    while (year.length < 4) {
      year = "0" + year;
    }
    while (month.length < 2) {
      month = "0" + month;
    }
    while (day.length < 2) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control mb-2"
            type="password"
            value={account.password}
            placeholder="password"
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            value={account.firstName}
            className="form-control mb-2"
            placeholder="first name"
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            value={account.lastName}
            className="form-control mb-2"
            placeholder="last name"
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            value={formatDate(account.dob)}
            className="form-control mb-2"
            placeholder="date of birth"
            type="date"
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            value={account.email}
            className="form-control mb-2"
            type="email"
            placeholder="email"
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            value={account.role}
            className="form-control mb-2"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100 mb-2">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger w-100 mb-2">
            Signout
          </button>

          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
