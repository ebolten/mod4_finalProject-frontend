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

  flip = (event) => {
    event.target.parentElement.style.transform = "rotateX(180deg)"
    this.setState({
      flippedAt: this.state.timeCooked
    });
  };

  getPancakeStatus = () => {
    const { timeCooked, flippedAt } = this.state;

    const cookedMin = 2
    const cookDifficulty = 2 // lower number = more difficult
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

  removePancake = () => {
    const { id, burner } = this.props;
    let status = this.getPancakeStatus();
    this.props.removePancake(id, status, burner);
  };

  render() {
    // const { timeCooked, flippedAt } = this.state;
    // const firstSide = Boolean(this.state.flippedAt === undefined);
    const status = this.getPancakeStatus();

    return (
      <div className={`pancake`}>
        <div className="pancake__content">
          <div className={`pancake-front --${status}`} onClick={this.flip}>
            {/* <h2>Front Side</h2> */}
          </div>
          <div className={`pancake-back --${status}`} onClick={this.removePancake}>
            {/* <h2>Back Side</h2> */}
          </div>
        </div>
      </div>


    );
  }
}

export default Pancake;
