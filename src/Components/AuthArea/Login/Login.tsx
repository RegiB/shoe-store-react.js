import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import CredentialsModel from "../../../Models/CredentialsModel";
import UserModel from "../../../Models/UserModel";
import { loginAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Login.css";

function Login(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function send(credentials: CredentialsModel) {
    try {
      const response = await axios.post<UserModel>(
        globals.urls.login,
        credentials
      );
      store.dispatch(loginAction(response.data));
      history.push("/home");
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="Login">
      <Typography variant="h4" className="HeadMain">
        התחברות:
      </Typography>
      <br />
      <form onSubmit={handleSubmit(send)}>
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
          כניסה
        </Button>
      </form>
    </div>
  );
}

export default Login;
