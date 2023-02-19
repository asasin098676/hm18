import React, { Component } from "react";
import "./TimerComponent.css";
class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 13,
      minute: 50,
      isOn: false,
    };
  }

  downMinute() {
    this.setState({
      minute: this.state.minute - 1,
      second: 59,
    });
  }
  //startTimer
  startTimer() {
    this.setState({
      second: this.state.second,
      isOn: true,
    });

    console.log("start", this.state.isOn);
    this.timer = setInterval(() => {
      if (this.state.second > 0) {
        this.setState({
          second: this.state.second - 1,
        });
      }
      if (this.state.second === 0) {
        if (this.state.minute === 0) {
          clearInterval(this.timer);
          this.setState({
            isOn: false,
            second: 0,
            minute: 0,
          });
        } else {
          this.setState({
            minute: this.state.minute - 1,
            second: 59,
          });
        }
      }
    }, 1000);
    return () => {
      clearInterval(this.timer);
    };
  }
  //stopTimer
  stopTimer() {
    console.log("stop", this.state.isOn);
    this.setState({
      isOn: false,
    });
    clearInterval(this.timer);
  }
  //render
  render() {
    let start =
      this.state.time == 0 || this.state.isOn == false ? (
        <button onClick={this.startTimer.bind(this)}>start</button>
      ) : null;

    return (
      <div className="mainDiv">
        {start}
        <button onClick={this.stopTimer.bind(this)}>pause</button>
        <div style={{ width: this.state.minute + "%" }} className="minute">
          <div className="fixet">
            <p>minute : </p>
            <h3> {this.state.minute}</h3>
          </div>
        </div>
        <div style={{ width: this.state.second + "%" }} className="second">
          <div className="fixet">
            <p>second : </p>
            <h3>{this.state.second}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerComponent;
