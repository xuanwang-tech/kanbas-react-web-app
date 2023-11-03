import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaSortDown, FaCheckCircle } from "react-icons/fa";

import {
  FaGripVertical,
  FaEllipsisVertical,
  FaCaretRight,
  FaCircleCheck,
  FaCaretDown,
  FaPlus,
} from "react-icons/fa6";

// function ModuleList() {
//   const { courseId } = useParams();
//   const modules = db.modules;
//   const [modules, setModules] = useState(db.modules);
  
// return (
//     <div class="list-group mt-3">
//       {
//         modules
//           .filter((module) => module.course === courseId)
//           .map((module, index) => (
//             <div key={index} class="list-group-item list-group-item-secondary mb-3 p-0">
//               <div className="p-2">
//                 <FaGripVertical className="me-2" />
//                 <FaSortDown className="me-1 mb-2" />
//                 {module.name}
//                 <FaEllipsisVertical className="me-2 mt-1 float-end" />
//                 <FaPlus className="me-2 mt-1 float-end" />
//                 <FaCheckCircle className="green-color me-2 mt-1 float-end" />
//               </div>
//               {
//                 module.lessons && (
//                   <div className="list-group">
//                     {
//                       module.lessons.map((lesson, index) => (
//                         <div class="list-group-item ">
//                           <div className="display-flex">
//                             <FaGripVertical style={{ fontSize: "large" }} className="me-2 mt-1" />
//                             <div>
//                               {lesson.name}
//                               <FaEllipsisVertical className="mt-1 float-end" />
//                               <FaCheckCircle className="green-color me-2 mt-1 float-end" />
//                               {/* <hr className="no-margin"/> */}
//                               <div className="ms-5">{lesson.description}</div>
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     }
//                   </div>
//                 )
//               }
//             </div>
//           ))
//       }
//     </div>
//   );
// }
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList({ showModuleForm, setShowModuleForm }) {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="list-group">
      <div className="list-group-item d-flex align-items-start">
        <div className="flex-grow-1 me-3">
          <input
            className="form-control mb-3 w-75"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />

          <textarea
            className="form-control w-75 mb-2"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
        <div className="column mt-1">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
          <button
            className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
        </div>
      </div>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-secondary align-items-center mb-4"
          >
            <div style={{ float: "left" }} className="mt-4">
              <FaGripVertical className="mb-1 mb-5" />
              <FaCaretRight className="mb-1 me-2 mb-5" />
            </div>
            <div style={{ display: "inline-block" }} className="mt-3">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </div>

            <div style={{ float: "right" }} className="mt-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "5px" }}>
                  <FaCircleCheck className="text-success" />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <FaCaretDown className="me-3" />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <FaPlus className="me-3" />
                </div>
                <div>
                  <FaEllipsisVertical />
                </div>
              </div>
              <div style={{ clear: "both", marginTop: "45px" }}>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default ModuleList;

