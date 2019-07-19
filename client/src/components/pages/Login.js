import React from "react";
import Form from "../Form";
import MyModal from "./Modal"
const Login = () => {
  return (
    <div>
      <MyModal show={true}/>
    {/* <div className="container">
      <div className="card">
        <div className="card-header"><h2>Login</h2></div>
        <div className="card-body"><Form /></div>
      </div>
    </div> */}
    </div>
  );
}


// const Login = () => {
//   return (
//     <div className="card">
//       <div className="content">
//         <Form />
//       </div>
//     </div>
//   );
// }

// const Contact = () => (

//   <div class="modal-dialog">

//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal">&times;</button>
//         <h4 class="modal-title">Modal Header</h4>
//       </div>
//       <div class="modal-body">
//         <p>Some text in the modal.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//       </div>
//     </div>

//   </div>

// );

export default Login;
