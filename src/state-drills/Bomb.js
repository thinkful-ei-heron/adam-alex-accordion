import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1
      })
      if(this.state.timer % 8 === 0) {
        clearInterval(this.interval)
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    console.log(this.state.timer)
    return <div>{this.state.timer % 8 === 0 ? <h1>Boom!</h1>: (this.state.timer % 2 === 0 ? <p>tock</p> : <p>tick</p>)}</div>
  }
}

export default Bomb;