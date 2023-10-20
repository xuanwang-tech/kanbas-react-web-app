// import ModuleList from "../Modules/ModuleList";
import Modules from "../Modules";
import Status from "./status";

function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <Modules />
        </div>
        <div className="col-2">
            <h2>Status</h2>
            <Status/>
        </div>
    </div>
  );
}
export default Home;