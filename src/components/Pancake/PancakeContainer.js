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

  addPancake = (event) => {
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
    }, () => {
      const { pancakes, cooked, burnt, raw } = this.state;
      this.props.countPancakes(
        pancakes, cooked, burnt, raw
      )
    })

    // , () => this.callback(pancakes, cooked, burnt, raw)

    //this will decide what the score and money is updated with
    let addByScore = 0
    let addByMoney = 0

    if(status === 'cooked') {
      addByScore = 10;
      addByMoney = 20;
    } else if(status === 'burnt') {
      addByScore = -10;
      addByMoney = -15;
    } else if(status === 'raw') {
      addByScore = -10;
      addByMoney = -5;
    }
    this.props.updateSession(addByScore,addByMoney)
  }



  render() {
    const { burners } = this.state;
    const pancake = (id) => burners[id].map((pancake) => <PancakeView key={id} burner={id} id={pancake} removePancake={this.removePancake} />)

    return (
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
    )
  }
}

export default PancakeContainer;
