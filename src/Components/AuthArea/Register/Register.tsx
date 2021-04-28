import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import UserModel from "../../../Models/UserModel";
import { registerAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Register.css";

function Register(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function send(user: UserModel) {
    try {
      const response = await axios.post<UserModel>(globals.urls.register, user);
      store.dispatch(registerAction(response.data));
      notify.success("נרשמת בהצלחה!");
      history.push("/home");
    } catch (error) {
      notify.error(error);
    }
  }
  return (
    <div className="Register">
      <Typography variant="h4" className="HeadMain">
        הרשמה:
      </Typography>
      <br />
      <form onSubmit={handleSubmit(send)}>
        <TextField
          required
          type="text"
          name="firstName"
          label="שם פרטי"
          variant="filled"
          inputRef={register}
          className="FieldText1"
        />
        &nbsp; &nbsp;
        <TextField
          required
          type="text"
          name="lastName"
          label="שם משפחה"
          variant="filled"
          inputRef={register}
          className="FieldText1"
        />
        <br />
        <br />
        <TextField
          required
          type="text"
          name="username"
          label="שם משתמש"
          variant="filled"
          inputRef={register}
          className="FieldText2"
        />
        <br />
        <br />
        <TextField
          required
          type="password"
          name="password"
          label="סיסמה"
          variant="filled"
          inputRef={register}
          className="FieldText2"
        />
        <br />
        <br />
        <Button variant="contained" type="submit" color="primary">
          הרשמה
        </Button>
      </form>
    </div>
  );
}

export default Register;
