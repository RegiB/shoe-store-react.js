import Logo from "../Logo/Logo";
import "./Header.css";
import shoeprint from "../../../Assets/Images/shoeImages/shoe-print.png";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import { NavLink } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <NavLink to="/home">
        <h1>
          !SHOE <img className="HeadPic" src={shoeprint}></img> me STYLE
        </h1>
      </NavLink>

      <Logo />
      <AuthMenu />
    </div>
  );
}

export default Header;
