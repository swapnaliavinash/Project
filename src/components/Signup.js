import React from 'react';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const SignUp = () => {
  return (
    <div>

<NavLink to="/add-user" activeStyle>
          <h1>Registration</h1>  
          {/* <button className = "btn btn-success" onClick={this.saveRequest}>Save</button> */}

          </NavLink>
      
    </div>
  );
};
  
export default SignUp;