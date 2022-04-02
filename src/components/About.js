import { logRoles } from "@testing-library/react";
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const About = () => {
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
      <h5>
      Presently, there growth. rapid growth in waste due to urbanization, industrialization, and population
There must be required an appropriate waste management technique for saving the environment
and natural resources through proper recycling mechanism.
       Waste is waste and it must be properly treated regardless of its type like E-waste, solid waste, Bio-medical waste, etc. We have proposed an online integrated framework to manage the all kinds of
waste.
       This complete process is performed in just one click on 'eco green' website that will reduce the processing time, efforts, cost and increase the efficiency of waste management.  
       Eco-green is working in waste paper, metals, plastic re-cycling management with a goal to spread awareness about recycling and encouraging people to save the environment and save the world. Eco-green intends to help out busy people to throw away and get money for their trash. You can avail this service upon the request by giving a call or sending enquiry by e-Mail on our application.
Eco-green invites to join hands and try to help us in re-cycling management.
        We have came up with an idea of making a eco-green website to collect waste from customer with door-to-door collections of waste from the household and providing benefits to the customer on selling of maximum waste.
      </h5>
    </div>
    </>
  );
};
  
export default About;