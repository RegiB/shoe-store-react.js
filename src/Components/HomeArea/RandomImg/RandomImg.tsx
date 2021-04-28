import { Component } from "react";
import "./RandomImg.css";
import one from "../../../Assets/Images/funImages/3.jpg";
import two from "../../../Assets/Images/funImages/4.jpg";
import three from "../../../Assets/Images/funImages/5.jpg";
import four from "../../../Assets/Images/funImages/6.jpg";
import five from "../../../Assets/Images/funImages/7.jpg";
import six from "../../../Assets/Images/funImages/9.jpg";
import seven from "../../../Assets/Images/funImages/11.jpg";

interface RandomImgState {
  imgsrc: string;
}

class RandomImg extends Component<{}, RandomImgState> {
  private items = [one, two, three];
  private currItem = 0;

  public constructor(props: {}) {
    super(props);
    this.state = {
      imgsrc: this.items[Math.floor(Math.random() * this.items.length)],
    };
  }

  public componentDidMount() {
    this.currItem = window.setInterval(() => {
      this.setState({
        imgsrc: this.items[Math.floor(Math.random() * this.items.length)],
      });
    }, 2000);
  }

  public render(): JSX.Element {
    return (
      <div className="RandomImg">
        <span>
          <img src={this.state.imgsrc}></img>
        </span>
      </div>
    );
  }

  public componentWillUnmount(): void {
    window.clearInterval(this.currItem); // clear
  }
}

export default RandomImg;
