import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

  

  
const Navbar = () => {
  return (



    <>
      <Nav>
        
        <NavMenu>
        
        <div className="frontt">
        {/* <h1> Home </h1> */}


        </div>
        <NavLink to="/Home" activeStyle>Home</NavLink>
        
          <NavLink to="/view-user/${id}" activeStyle>
            View User
          </NavLink>

          <NavLink to="/view-customer/${id}" activeStyle>
            View Customer
          </NavLink>

          <NavLink to="/view-Item/${id}" activeStyle>
            View Item
          </NavLink>
          

          <NavLink to="/viewReward/${id}" activeStyle>
            View Reward
          </NavLink>



         


        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;