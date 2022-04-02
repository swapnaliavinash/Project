import React, { useState } from "react";
import ReactDOM from "react-dom";
//import "./Login.css";

import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";


function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      id: "id",
      password: "pass1"
    },
    {
      id: "id",
      password: "pass2"
    }
  ];

  const errors = {
    id: "invalid userId",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { id, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.id=== id.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "id", message: errors.id });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (id) =>
    id === errorMessages.id && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Id</label>
          <input type="text" name="id" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
    <Nav>
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact Us
        </NavLink>
      
        <NavLink to="/add-user" activeStyle>
            Registration
          </NavLink>
          
          <NavLink to="/add-customer" activeStyle>
            CustomerRequest
          </NavLink>

        <NavLink to="/login" activeStyle>
          Login 
        </NavLink>


      </NavMenu>
    </Nav>

    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </>
  );
}

 const rootElement = document.getElementById("root");
// ReactDOM.render(<Login />, rootElement);
export default Login;
