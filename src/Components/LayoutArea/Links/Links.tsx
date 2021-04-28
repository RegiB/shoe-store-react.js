import { NavLink } from "react-router-dom";
import "./Links.css";

function Links(): JSX.Element {
  return (
    <div className="Links">
      <nav>
        <NavLink to="/home" exact>
          בית
        </NavLink>
        &nbsp;
        <NavLink to="/about" exact>
          מי אנחנו?
        </NavLink>
        <NavLink to="/employees" exact>
          העובדים שלנו
        </NavLink>
        &nbsp;
        <NavLink to="/products" exact>
          מוצרים
        </NavLink>
        &nbsp;
        <NavLink to="/contact-us" exact>
          דברו איתנו!
        </NavLink>
      </nav>
    </div>
  );
}

export default Links;
