import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import globals from "../../../Services/Globals";
import "./EmployeeCard.css";

interface EmployeeCardProps {
  employee: EmployeeModel;
}

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
  return (
    <div className="EmployeeCard Box">
      <NavLink to={"/employees/details/" + props.employee.id}>
        <img src={globals.urls.employeeImages + props.employee.imageName} />
      </NavLink>
        <br />
        <span>
          {props.employee.firstName}&nbsp;{props.employee.lastName}
        </span>
        <br />
        {props.employee.title}
        <br />
        {props.employee.country}
    </div>
  );
}

export default EmployeeCard;
