import ModuleList from "../Modules/ModuleList";
import ModuleButton from "../Modules/ModuleButton";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div className="row mx-5">
        <div className="col-md-9 d-block">
            <ModuleButton />
            <ModuleList />
        </div>
        <div className="col-3 d-none d-md-block">
            <CourseStatus />
        </div>
    </div>
  );
}
export default Home;
