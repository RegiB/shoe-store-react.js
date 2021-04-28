import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import ContactUs from "../../ContactArea/ContactUs/ContactUs";
import AddEmployee from "../../EmployeeArea/AddEmployee/AddEmployee";
import EmployeeDetails from "../../EmployeeArea/EmployeeDetails/EmployeeDetails";
import Employees from "../../EmployeeArea/Employees/Employees";
import UpdateEmployee from "../../EmployeeArea/UpdateEmployee/UpdateEmployee";
import Home from "../../HomeArea/Home/Home";
import Products from "../../ProductArea/Products/Products";
import Page404 from "../../SharedArea/Page404/Page404";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Switch>
        {/* Route for each page! */}
        <Route path="/home" component={Home} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/about" component={About} exact />
        <Route path="/employees" component={Employees} exact />
        <Route path="/employees/details/:id" component={EmployeeDetails} exact />
        <Route path="/employees/add-new" component={AddEmployee} exact />
        <Route path="/employees/details/update/:id" component={UpdateEmployee} exact />
        <Route path="/contact-us" component={ContactUs} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
 
        {/* default routing */}
        <Redirect from="/" to="/home" exact />
        {/* page not found */}
        <Route component={Page404} /> {/*must be last*/}
      </Switch>
    </div>
  );
}

export default Routing;
