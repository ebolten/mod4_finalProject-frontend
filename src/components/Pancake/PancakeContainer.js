import React from 'react';
import PancakeView from './PancakeView';

class PancakeContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      //time: undefined,
      pancakes: [],
      cooked: 0,
      burnt: 0,
      raw: 0
    };
  }

  // TODO: create a componentDidMount() which will set the current time
  // componentDidMount() {
  //   this.setCurrentTime()
  // }
  
  // setCurrentTime = () => {
  //   this.setState({ time: new Date(Date.now())});
  // }

  addPancake = () => {
    // Allow a maximum of 6 pancakes
    if (this.state.pancakes.length < 6) {
      this.setState({
        pancakes: [...this.state.pancakes, Date.now()]
      })
    } 
    else {
      alert("There's no more room!")
    }
  }

  takeItOff = (id, status) => {
    const { pancakes, cooked, burnt, raw } = this.state;

    this.setState({
      pancakes: pancakes.filter(pancake => !(pancake === id)),
      cooked: status === 'cooked' ? cooked + 1 : cooked,
      burnt: status === 'burnt' ? burnt + 1 : burnt,
      raw: status === 'raw' ? raw + 1 : raw
    });
  }

  render() {
    const { pancakes, burnt, cooked, raw, time } = this.state;
    const pans = pancakes.map((pancake, index) => <PancakeView key={index} id={pancake} takeItOff={this.takeItOff} />);

    return (
      <div className="Game">

        <div className="GameHeader">
          <span>Pancake shop opened at: {time ? time.toString() : ''}</span>
          <div>
            <div className="Game__score --cooked">Cooked: {cooked}</div>
            <div className="Game__score --burnt">Burnt: {burnt}</div>
            <div className="Game__score --raw">Raw: {raw}</div>
          </div>
          <button
            onClick={this.addPancake}
            className="Game__button"
          >
            New pancake!
          </button>
        </div>

        <div className="stoveTop">
          <div className="burners">
            <div className="burner" data-id="1"></div>
            <div className="burner" data-id="2"></div>
            <div className="burner" data-id="3"></div>
            <div className="burner" data-id="4"></div>
            <div className="burner" data-id="5"></div>
            <div className="burner" data-id="6"></div>
            <div className="Game__pancakes">{pans}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PancakeContainer;
