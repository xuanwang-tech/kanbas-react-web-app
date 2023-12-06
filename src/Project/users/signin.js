import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
//   const signin = async () => {
//     await client.signin(credentials);
//     navigate("/project/account");
// };
  return (
    // <div>
    //   <h1>Signin</h1>
    //   {error && <div className="alert alert-danger">{error}</div>}
    //   <input
    //     type="text"
    //     className="form-control mb-2 w-25"
    //     placeholder="username"
    //     value={credentials.username}
    //     onChange={(e) =>
    //       setCredentials({ ...credentials, username: e.target.value })
    //     }
    //   />
    //   <input
    //     type="password"
    //     className="form-control mb-2 w-25"
    //     placeholder="password"
    //     value={credentials.password}
    //     onChange={(e) =>
    //       setCredentials({ ...credentials, password: e.target.value })
    //     }
    //   />
    //   <button onClick={signin} className="btn btn-primary">
    //     Signin
    //   </button>
    // </div>
        <div>
            <h1>Signin</h1>
            <input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <input value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <button className="btn btn-primary" onClick={signin}> Signin </button>
        </div>

  );
}
export default Signin;
