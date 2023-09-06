import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const item = e.target.name;
    // console.log(e.target.name);
    this.setState((prev) => ({
    [item]: prev[item] + 1
    }))
  }

  render() {
    console.log(this.state.good);
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button name="good" onClick={this.handleClick} type='button'>Good</button>
          <button name="neutral" onClick={this.handleClick} type='button'>Neutral</button>
          <button name="bad" onClick={this.handleClick} type='button'>Bad</button>
        </div>

        <h2>Statistics</h2>
        <div>{this.state.good}</div>
        <div>{this.state.neutral}</div>
        <div>{this.state.bad}</div>
      </>
    );
  }
}



