import React from "react";
import "./style.css";

import CardBtn from "../CardBtn";

function StudentCourseCard(props) {
  return (
    <div className="cardStudent">
      {/* <div className="content" style={{ color: "red" }}> */}
      <div className="content">
        <ul>
          <li>
            <strong>Course:</strong> {props.name}
          </li>
          <li>
            <strong>Progress:</strong> {props.progress} %
          </li>
        </ul>
      </div>
      <CardBtn
        // style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      />

    </div>
  );
}


export default StudentCourseCard;

// function StudentCourseCard(props) {
//   return (
//     <div className="cardStudent">
//       {/* <div className="content" style={{ color: "red" }}> */}
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Course:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Progress:</strong> {props.progress} %
//           </li>
//         </ul>
//       </div>
//       {/* <CardBtn
//         // style={{ opacity: props.image ? 1 : 0 }}
//         onClick={props.handleBtnClick}
//         data-value="pick"
//       /> */}

//     </div>
//   );
// }


