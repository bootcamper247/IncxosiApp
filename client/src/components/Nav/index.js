import React from "react";
import { Link } from "react-router-dom";


// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className='navbar-brand {
                window.location.pathname === "/Home" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }' to="/">
        Incxosi
      </Link>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link 
              to="/"
              className={
                window.location.pathname === "/Home" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/Student"
              className={window.location.pathname === "/Student" ? "nav-link active" : "nav-link"}
            >
              Student
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Instructor"
              className={window.location.pathname === "/Instructor" ? "nav-link active" : "nav-link"}
            >
              Instructor
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/books"
              className={window.location.pathname === "/books" ? "nav-link active" : "nav-link"}
            >
              Add
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
