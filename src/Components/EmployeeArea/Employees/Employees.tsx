import { PersonAdd } from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import { employeeDownloadedAction } from "../../../Redux/EmployeeState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Employees.css";

interface EmployeesState {
  employees: EmployeeModel[];
}

class Employees extends Component<{}, EmployeesState> {
  public constructor(props: {}) {
    super(props);
    this.state = { employees: store.getState().employeesState.employees };
  }

  public async componentDidMount() {
    try {
      if (store.getState().employeesState.employees.length === 0) {
        const response = await axios.get<EmployeeModel[]>(
          globals.urls.employees
        );
        this.setState({ employees: response.data });
        store.dispatch(employeeDownloadedAction(response.data));
      } 
    } catch (error) {
      // alert(error.message);
      notify.error(error);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="Employees">
        {this.state.employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
        <br />
        {store.getState().authState.user && <NavLink to="/employees/add-new" className="Box">
          <PersonAdd />
        </NavLink> }
        
      </div>
    );
  }
}



export default Employees;
