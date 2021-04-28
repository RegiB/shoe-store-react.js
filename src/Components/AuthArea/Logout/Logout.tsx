import { useEffect } from "react";
import { useHistory } from "react-router";
import { logoutAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";

function Logout(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    store.dispatch(logoutAction());
    history.push("/home");
  });

  return <></>;
}

export default Logout;
