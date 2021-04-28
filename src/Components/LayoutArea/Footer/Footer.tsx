import Clock from "../Clock/Clock";
import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <Clock/>
      <h1> Regina Brand Design &copy; כל הזכויות שמורות | {currentYear()}</h1>
    </div>
  );
}

export default Footer;

function currentYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}
