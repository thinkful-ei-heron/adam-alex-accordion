import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      chamber: null,
      spinningTheChamber: null
    }
  }
 
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleButtonClick = () => {
    if(this.state.spinningTheChamber === null) {
      this.setState({ spinningTheChamber: true})
    }
    let random = Math.ceil(Math.random() * this.props.bulletsInChamber || 8)
    this.setState({ spinningTheChamber: !this.spinningTheChamber})
    let timeout = setTimeout(() => {
      this.setState({ chamber: random, spinningTheChamber: false})
    }, 2000)
  }
  render() {
    return (
      <div>
          <button onClick={this.handleButtonClick}>Pull The Trigger</button>
          {this.state.spinningTheChamber === null ? <p>It's Roulette Time. With a Gun.</p> :
          (this.state.spinningTheChamber ? <p>Spinning the chamber and pulling the trigger! ...</p> :
            (this.state.chamber === this.props.bulletsInChamber ? <h1>BANG!!!</h1> : <p>You're Safe...</p>)
          )}
        
        
      </div>
    )
  }
}

export default RouletteGun;