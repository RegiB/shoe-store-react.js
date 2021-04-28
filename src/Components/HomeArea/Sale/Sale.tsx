import "./Sale.css";

function Sale(): JSX.Element {
    return (
        <div className="Sale">
			 {ifSunOrMon() ? (
        <span>מבצע! מבצע! מבצע! כל הנעליים בחצי המחיר!!!</span>
      ) : (
        <span></span>
      )}
        </div>
    );
}

function ifSunOrMon() {
    const date = new Date();
    const day = date.getDay() + 1;
    return day > 3;
  }
export default Sale;
