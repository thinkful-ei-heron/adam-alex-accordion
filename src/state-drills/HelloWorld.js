import React from 'react';

class HelloWorld extends React.Component {
  state = {
    display: 'World'
  }
  
  handleButtonClick = (event) => {
    this.setState({ display: event.target.id })
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.display}!</h1>
        <div>
          <button id={this.props.friend} onClick={this.handleButtonClick}>{this.props.friend}</button>
          <button id={this.props.react} onClick={this.handleButtonClick}>{this.props.react}</button>
          <button id={this.props.world} onClick={this.handleButtonClick}>{this.props.world}</button>
        </div>
      </div>

    )
  }
}

export default HelloWorld;