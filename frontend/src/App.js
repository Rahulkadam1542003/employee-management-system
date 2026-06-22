import { Route, Routes, useLocation } from 'react-router-dom';
import Aboutus from './Aboutus';
import AddEmployee from './AddEmployee';
import AdminDashboard from './AdminDashboard';
import AdminNav from './AdminNav';
import './App.css';
import Contactus from './Contactus';
import EmployeeDashboard from './EmployeeDashboard';
import EmpNavbar from './EmpNavbar';
import FirstPage from './FirstPage';
import Home from './Home';
import Registration from "./Registration";
import Services from './Services';
import ShowEmployee from './ShowEmployee';
// import Test from './Test';
import ViewEmployee from './ViewEmployee';
// miport FunctionRegistration from './FunctionRegistration'




function App() {
  return (
    <div className="App">
      
        <Appcontent></Appcontent>
       
        <Routes>
          <Route path="/" element={<FirstPage></FirstPage>}></Route>
          <Route path="/addemp" element={<AddEmployee></AddEmployee>}></Route>
          <Route path="/viewemp" element={<ViewEmployee></ViewEmployee>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path="/contactus" element={<Contactus></Contactus>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="/showemp" element={<ShowEmployee></ShowEmployee>}></Route>
          <Route path="/employeedashboard" element={<EmployeeDashboard></EmployeeDashboard>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
        

        </Routes>
      

    </div>
  );
}

export default App;

function Appcontent() {
  let user = JSON.parse(localStorage.getItem("userinfo"));
  let loggedin=JSON.parse(localStorage.getItem("loggedin"))
  let location=useLocation();
  //http://localhost:3000/registration


  return (
    <div>
      {
        (loggedin==true && location.pathname!="/registration" && location.pathname!="/") &&
        (user && user.role.toLowerCase()=="admin"?<AdminNav></AdminNav>:
        <EmpNavbar></EmpNavbar>)
       }



    </div>
  )
}