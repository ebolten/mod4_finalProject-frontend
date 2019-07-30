import React from "react";

class Pancake extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeCooked: 0,
      flippedAt: undefined
    };
  }
  
  startInterval = () => {
    this.interval = setInterval(this.updateCounter, 1000);
  };

  componentDidMount() {
    this.startInterval()
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCounter = () => {
    this.setState({
      timeCooked: this.state.timeCooked + 1
    });
  };

  flip = () => {
    this.setState({
      flippedAt: this.state.timeCooked
    });
  };

  getPancakeStatus = () => {
    const { timeCooked, flippedAt } = this.state;

    const cookedMin = 3
    const cookDifficulty = 3 // lower number = more difficult
    const cookedMax = cookedMin + cookDifficulty

    // first side
    if (!flippedAt) {
      if (timeCooked < cookedMin) return "raw";
      if (timeCooked >= cookedMin && timeCooked <= cookedMax) return "cooked";
      return "burnt";
    }

    //second side
    if (flippedAt > cookedMax || timeCooked > (cookedMax * 2)) return "burnt";
    if (timeCooked >= (cookedMin * 1.5) && flippedAt >= cookedMin) return "cooked";
    return "raw";
  };

  takeItOff = () => {
    const { id } = this.props;
    let status = this.getPancakeStatus();
    this.props.takeItOff(id, status);
  };

  render() {
    const { timeCooked, flippedAt } = this.state;
    const firstSide = Boolean(this.state.flippedAt === undefined);
    const status = this.getPancakeStatus();

    return (
      <div className={`Pancake --${status}`}>
        <div className="Pancake__content">
          <p>I am a pancake.</p>
          <p>
            Time cooked on {`${firstSide ? "first" : "second"}`} side:{" "}
            {`${firstSide ? timeCooked : timeCooked - flippedAt}`}
          </p>
          <div>
            {firstSide ? (
              <button onClick={this.flip}>Flip me!</button>
            ) : (
              <button onClick={this.takeItOff}>Take me off!</button>
            )}
          </div>
        </div>
      </div>

    );
  }
}

export default Pancake;
