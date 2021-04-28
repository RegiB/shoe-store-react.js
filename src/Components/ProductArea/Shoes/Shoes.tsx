import { NavLink } from "react-router-dom";
import "./Shoes.css";

interface ShoesProps {
  header: string;
  model: string;
  size: number;
  price: number;
  image: string;
}

function Shoes(props: ShoesProps): JSX.Element {
  return (
    <div className="Shoes OtherBox">
      <h3>{props.header}</h3>
      <a href={props.image}>
      <img src={props.image} />
      </a>
      <br />
      <span><b>מודל:</b>&nbsp;{props.model}</span>
      <br />
      <span><b>מידה:</b>&nbsp;{props.size}</span>
      <br />
      <span><b>מחיר:</b>&nbsp;{props.price}&nbsp;ש"ח</span>
      <br />
      <br />
    </div>
  );
}

export default Shoes;
