import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Random404.css";

interface RandomProductState {
  item: string;
}

class RandomProduct extends Component<{}, RandomProductState> {
  private items = ["!Page Not Found", "!Oooops", "העמוד לא נמצא!", "!ERROR", "!Uh-Oh", "שגיאה!"];
  private currItem = 0;

  public constructor(props: {}) {
    super(props);
    this.state = {
      item: this.items[Math.floor(Math.random() * this.items.length)],
    };
  }

  public componentDidMount(): void {
    this.currItem = window.setInterval(() => {
      this.setState({
        item: this.items[Math.floor(Math.random() * this.items.length)],
      });
    }, 2000);
  }

  public render(): JSX.Element {
    return (
      <div className="Random404">
        <h1>404</h1>
        <h3>{this.state.item}</h3>
        <NavLink to="/home">חזרה לעמוד הבית</NavLink>
      </div>
    );
  }

  public componentWillUnmount(): void {
    window.clearInterval(this.currItem); // clear
  }
}

export default RandomProduct;
