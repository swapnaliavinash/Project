import logo from './logo.svg';
import './App.css';
import CreateUserComponent from './components/CreateUserComponent';
import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import FooterComponent from './components/FooterComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import CreateUserRequest from './components/CreateUserRequest';
import UpdateCustomer from './components/UpdateCustomer';
import User_Request_Form from './components/User_Request_Form';
import ViewCustomer from './components/ViewCustomer';
import CreateScrapTypesComponent from './components/CreateScrapTypesComponent';
import UpdateScrapItemComponent from './components/UpdateScrapItemComponent';
import ListScrapItemComponent from './components/ListScrapItemComponent';
import ViewItem from './components/ViewItem';
import ListScrapReward from './components/ListScrapReward';
import UpdateScrapReward from './components/UpdateScrapReward';
import ViewReward from './components/ViewReward';
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/Signup';
import Admin from './components/Admin';

import background from "./image/image1.jpeg";





function App() {
  return (
    
    <div className="App">
      <Router>
      <HeaderComponent/>
      <div>
      <div className="container">
        
        
         <Switch>

         <Route path='/login' exact component={Login}></Route>
         <Route path='/admin' exact component={Admin}></Route>


          
          <Route path='/users' exact component={ListUserComponent}></Route>
           <Route path='/add-user' exact component={CreateUserComponent}></Route>
           <Route path='/update-user' exact component={UpdateUserComponent}></Route>
          



           
            <Route path = "/customer" exact component = {User_Request_Form}></Route>
            <Route path = "/add-customer" exact component = {CreateUserRequest}></Route> 
            <Route path = "/view-customer/:id" exact component = {ViewCustomer}></Route> 
            <Route path = "/update-customer/:id" exact component= {UpdateCustomer}></Route>

          
            <Route path = "/Scrap_Reward"  exact component = {ListScrapReward}></Route> 
            <Route path = "/addReward" exact component = {UpdateScrapReward}></Route>
            <Route path = "/viewReward" exact component = {ViewReward}></Route> 
           

            
            <Route path="/Scrap_Types" exact component = {ListScrapItemComponent}></Route>
            <Route path = "/add-Item"  exact component = {CreateScrapTypesComponent}></Route> 
            <Route path = "/update-Item/:id" exact component = {UpdateScrapItemComponent}></Route> 
           <Route path = "/view-Item/:id" exact component = {ViewItem}></Route> 
           


        {/* <Route path='/home'  exact component={Home} /> */}
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />

        <Route path='/sign-up' component={SignUp} />
            


        </Switch> 
        
      {/* <ListUserComponent/> */}
      {/* <CreateUserRequest/> */}
      {/* <UpdateCustomer/> */}
      {/* <User_Request_Form/> */}
      {/* <ViewCustomer/> */}
      {/* <CreateUserComponent/> */}
      {/* <UpdateUserComponent/> */}

       
        {/* <CreateScrapTypesComponent/>
        <ListScrapItemComponent/>
        <UpdateScrapItemComponent/>
        <ViewItem/>

        
        <ListScrapReward/>
        <UpdateScrapReward/>
        <ViewReward/> */}




        </div>
      {/* <FooterComponent/> */}
    
    </div>
    </Router>
    </div>
  );
}

export default App;
