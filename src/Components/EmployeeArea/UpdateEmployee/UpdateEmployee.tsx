import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import { employeeUpdatedAction } from "../../../Redux/EmployeeState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/jwtAxios";
import notify from "../../../Services/Notification";
import "./UpdateEmployee.css";

interface RouteParams {
  id: string;
}

interface UpdateEmployeeProps extends RouteComponentProps<RouteParams> {}

function UpdateEmployee(props: UpdateEmployeeProps): JSX.Element {
  const history = useHistory();
  const { register, handleSubmit } = useForm<EmployeeModel>();
  const [state] = useState({employee:store.getState().employeesState.employees.find(emp => emp.id === +props.match.params.id)});
   
  async function send(employee: EmployeeModel) {
    // console.log(employee);
    // console.log(props.match.params.id);

    try {
      const fd = new FormData();
      fd.append("id", props.match.params.id);
      fd.append("firstName", employee.firstName);
      fd.append("lastName", employee.lastName);
      fd.append("title", employee.title);
      fd.append("city", employee.city);
      fd.append("country", employee.country);
      fd.append("birthDate", employee.birthDate.toString());
      fd.append("image", employee.image.item(0));

      const response = await jwtAxios.put<EmployeeModel>(
        globals.urls.employees + props.match.params.id,
        fd
      );
      const updatedEmployee = response.data;
      notify.success("עדכון עובד.ת הצליח!");
      store.dispatch(employeeUpdatedAction(updatedEmployee));
      history.push("/employees");
    } catch (error) {
      // alert("Error" + error.message);
      notify.error(error);
    }
  }

  return (
    <div className="UpdateEmployee">
      <Typography variant="h4" className="HeadMain">
        טופס עדכון עובד.ת:
      </Typography>
      <br />
      <form id="addForm" onSubmit={handleSubmit(send)}>
        <TextField
          required
          name="firstName"
          label="שם פרטי:"
          type="text"
          defaultValue={state.employee.firstName}
          variant="outlined"
          inputRef={register}
        />
        &nbsp; &nbsp;
        <TextField
          required
          name="lastName"
          label="שם משפחה:"
          type="text"
          defaultValue={state.employee.lastName}
          variant="outlined"
          inputRef={register}
        />
        <br />
        <br />
             <TextField
          required
          name="birthDate"
          label="תאריך לידה:"
          type="date"
          defaultValue={state.employee.birthDate}
          className="FieldText"
          variant="outlined"
          // InputLabelProps={{ shrink: true }}
          inputRef={register}
          />
       &nbsp;
       &nbsp;
        <TextField
          required
          type="text"
          name="title"
          label="תפקיד:"
          defaultValue={state.employee.title}
          inputRef={register}
          variant="outlined"
        ></TextField>
       <br/>
       <br/>
        <TextField
          required
          name="city"
          label="עיר:"
          type="text"
          defaultValue={state.employee.city}
          variant="outlined"
          inputRef={register}
        />
        &nbsp; &nbsp;
        <TextField
          required
          name="country"
          label="מדינה:"
          type="text"
          defaultValue={state.employee.country}
          variant="outlined"
          inputRef={register}
        />
        <br />
          <TextField
          required
          name="image"
          label="תמונה:"
          type="file"
          variant="standard"
          inputRef={register}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          עדכון
        </Button>
        <NavLink
            className="Btn-link"
            to={"/employees"}
          >
            <Button variant="contained" fullWidth>
              ביטול
            </Button>
          </NavLink>
      </form>
    </div>
  );
}

export default UpdateEmployee;
