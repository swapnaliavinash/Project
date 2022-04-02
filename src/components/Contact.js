import React from 'react';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

  
const Contact = () => {
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
    

    <div>
      <h2>Mail us on swapnalinikam13@gmail.com</h2>
    </div>
    </>
  );
};
  
export default Contact;