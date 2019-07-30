import React from 'react';
import PancakeView from './PancakeView';

class PancakeContainer extends React.Component {

  state = {
    time: undefined,
    pancakes: [],
    burners: [ [], [], [], [], [], [] ],
    cooked: 0,
    burnt: 0,
    raw: 0
  };

  // componentDidMount() {
  //   this.setCurrentTime()
  // }
  
  // setCurrentTime = () => {
  //   this.setState({ time: new Date(Date.now())});
  // }



  //add a new pancake to the burner
  addPancakeToBurner = (event) => {
    const id = event.target.dataset.id;

    if (this.state.burners[id]) {
      const burners = [...this.state.burners]
      burners[id] = [Date.now()]
      this.setState({burners})
    }
  }

  removePancake = (id, status, burner) => {
    const { burners, pancakes, cooked, burnt, raw } = this.state;

    burners[burner] = []

    this.setState({
      pancakes: [...pancakes, id],
      cooked: status === 'cooked' ? cooked + 1 : cooked,
      burnt: status === 'burnt' ? burnt + 1 : burnt,
      raw: status === 'raw' ? raw + 1 : raw,
      burners // clear used burner
    });
  }

  render() {
    const { pancakes, burnt, cooked, raw, time, burners } = this.state;
    const pancake = (id) => burners[id].map((pancake) => <PancakeView key={id} burner={id} id={pancake} removePancake={this.removePancake} />)

    return (
      <div className="game">
        
        <div className="game__header">
          {/* <span>Pancake shop opened at: {time ? time.toString() : ''}</span> */}
          <div>Pancakes Served: {cooked} of {pancakes.length}</div>
          <div className="game__score">
            <div className="--cooked">Cooked: {cooked}</div>
            <div className="--burnt">Burnt: {burnt}</div>
            <div className="--raw">Raw: {raw}</div>
          </div>
        </div>

        <div className="stove">
          <div className="burners">
            {burners.map((burner, index) => {
              const id = index
              return (
                <div className="burner" data-id={id} onClick={this.addPancake}>
                  {pancake(id)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PancakeContainer;
