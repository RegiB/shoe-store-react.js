import { Component } from "react";
import "./Clock.css";

interface ClockState {
  time: string;
}

// add icon

class Clock extends Component<{}, ClockState> {

    private timerId: number = 0; 

  public constructor(props: {}) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString()};
  }

  public componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date();
      this.setState({ time: now.toLocaleTimeString() });
    }, 1000);
  }

  public render(): JSX.Element {
    return (
      <div className="Clock">
        <p>{this.state.time}</p>
      </div>
    );
  }

  public componentWillUnmount(): void {
      window.clearInterval(this.timerId); // clear the timer
  }
}
export default Clock;
