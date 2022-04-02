import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

  

  
const Navbar = () => {
  return (

    // const myStyle={
    //   backgroundImage: `url(${background})` ",
    //   height:'100vh',
    //   marginTop:'-70px',
    //   fontSize:'50px',
    //   backgroundSize: 'cover',


    <>
      <Nav>
        
        <NavMenu>
        
        <div className="frontt">
        {/* <h1> Home </h1> */}


        </div>
        {/* <NavLink to="/Home" activeStyle>Home</NavLink> */}

        
        
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

          <NavLink to="/admin" activeStyle>
            Admin
          </NavLink>



        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;