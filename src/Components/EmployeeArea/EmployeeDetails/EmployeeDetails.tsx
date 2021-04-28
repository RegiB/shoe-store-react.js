import { Button } from "@material-ui/core";
import axios from "axios";
import { Component, Fragment } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import { employeeDeletedAction } from "../../../Redux/EmployeeState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/jwtAxios";
import notify from "../../../Services/Notification";
import "./EmployeeDetails.css";

interface RouteParams {
  id: string;
}

interface EmployeeDetailsProps extends RouteComponentProps<RouteParams> {}

interface EmployeeDetailsState {
  employee: EmployeeModel;
}

class EmployeeDetails extends Component<
  EmployeeDetailsProps,
  EmployeeDetailsState
> {
  public constructor(props: EmployeeDetailsProps) {
    super(props);
    this.state = { employee: null };
  }

  public componentDidMount() {
    try {
      const id = +this.props.match.params.id;
      const employee = store
        .getState()
        .employeesState.employees.find((emp) => emp.id === id);
      this.setState({ employee });
    } catch (error) {
      // alert(error.message);
      notify.error(error);
    }
  }

  public async deleteEmployee(id: number) {
    try {
      const response = await jwtAxios.delete(globals.urls.employees + id);
      if (response) {
        this.setState({ employee: null });
        store.dispatch(employeeDeletedAction(id));
        notify.success("מחיקת עובד.ת הצליחה!");
        window.history.back();
      }
    } catch (error) {
      notify.error(error);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="EmployeeDetails">
        {this.state.employee && (
          <Fragment>
            <div>
              <img
                src={
                  globals.urls.employeeImages + this.state.employee.imageName
                }
              />
            </div>
            <div>
              <p>
                <b>שם:</b> {this.state.employee.firstName}&nbsp;
                {this.state.employee.lastName}
                <br />
                <b>תפקיד:</b> {this.state.employee.title}
                <br />
                <b>תאריך לידה:</b> {this.state.employee.birthDate}
                <br />
                <b>כתובת:</b> {this.state.employee.city},{" "}
                {this.state.employee.country}
              </p>
            </div>
          </Fragment>
        )}
        <br />
        <NavLink to="/employees"> חזרה</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
        {store.getState().authState.user && (
          <NavLink
            className="Btn-link"
            to={"/employees/details/update/" + this.props.match.params.id}
          >
            <Button variant="contained" fullWidth>
              עדכון
            </Button>
          </NavLink>
        )}
        {store.getState().authState.user && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => this.deleteEmployee(this.state.employee.id)}
          >
            מחיקה
          </Button>
        )}
      </div>
    );
  }
}

export default EmployeeDetails;
