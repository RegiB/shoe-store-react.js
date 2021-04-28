import { Component } from "react";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import { Unsubscribe } from "redux";
import "./AuthMenu.css";
import { NavLink } from "react-router-dom";

interface AuthMenuState {
  user: UserModel;
}

class AuthMenu extends Component<{}, AuthMenuState> {
  private unsubscribeUser: Unsubscribe;

  public constructor(props: {}) {
    super(props);
    this.state = { user: store.getState().authState.user };
  }

  public componentDidMount() {
    this.unsubscribeUser = store.subscribe(() => {
      this.setState({ user: store.getState().authState.user });
    });
  }

  public render(): JSX.Element {
    return (
      <div className="AuthMenu">
        {this.state.user && (
          <>
            <span>Hello {this.state.user.firstName}!</span>
            <span> | </span>
            <NavLink to="/logout">Log Out</NavLink>
          </>
        )}
        {!this.state.user && (
          <>
            <span>Hello Guest!</span>
            <span> | </span>
            <NavLink to="/login">Log In</NavLink>
            <span> | </span>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    );
  }

  public componentWillUnmount() {
    this.unsubscribeUser();
  }
}

export default AuthMenu;
