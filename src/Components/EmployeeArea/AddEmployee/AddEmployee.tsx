import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import EmployeeModel from "../../../Models/EmployeeModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import { employeeAddedAction } from "../../../Redux/EmployeeState";
import "./AddEmployee.css";
import { useState } from "react";
import jwtAxios from "../../../Services/jwtAxios";
import { NavLink } from "react-router-dom";

function AddEmployee(): JSX.Element {
  const history = useHistory();
  const { register, handleSubmit } = useForm<EmployeeModel>();

  // useEffect(()=>{
  //   if(!store.getState().authState.user){
  //     notify.error("יש להתחבר לפני ביצוע הפעולה");
  //     history.push("/login");
  //   }
  // })

  async function send(employee: EmployeeModel) {
    // console.log(employee.title);
    try {
      // convert ProductModel to FormData in order to send text + image to the backend
      const fd = new FormData();
      fd.append("firstName", employee.firstName);
      fd.append("lastName", employee.lastName);
      fd.append("title", employee.title);
      fd.append("city", employee.city);
      fd.append("country", employee.country);
      fd.append("birthDate", employee.birthDate.toString());
      fd.append("image", employee.image.item(0));

      // using jwtAxios- sending token to be able to add an employee
      const response = await jwtAxios.post<EmployeeModel>(
        globals.urls.employees,
        fd
      );
      const addedEmployee = response.data;

      notify.success("הוספת עובד.ת הצליחה!");
      store.dispatch(employeeAddedAction(addedEmployee));
      history.push("/employees");
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="AddEmployee">
      <Typography variant="h4" className="HeadMain">
        טופס הוספת עובד.ת:
      </Typography>
      <br />
      <form id="addForm" onSubmit={handleSubmit(send)}>
        <TextField
          required
          name="firstName"
          label="שם פרטי:"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        &nbsp; &nbsp;
        <TextField
          required
          name="lastName"
          label="שם משפחה:"
          type="text"
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
          className="FieldText"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          inputRef={register}
        />
        &nbsp; &nbsp;
        <TextField
          required
          type="text"
          name="title"
          label="תפקיד:"
          inputRef={register}
          variant="outlined"
        ></TextField>
        <br />
        <br />
        <TextField
          required
          name="city"
          label="עיר:"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        &nbsp; &nbsp;
        <TextField
          required
          name="country"
          label="מדינה:"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <br />
        {/* <br /> */}
        <TextField
          required
          name="image"
          label="תמונה:"
          type="file"
          inputRef={register}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          הוספה
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

export default AddEmployee;
