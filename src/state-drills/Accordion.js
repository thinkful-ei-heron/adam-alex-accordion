import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  }
  
  constructor(props) {
    
    super(props)
    this.state={
      openItem: null
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleButtonClick = (event) => {
    this.setState({
      openItem: parseInt(event.target.id)
    })
    if(this.state.openItem === parseInt(event.target.id))
    {
      this.setState({
        openItem: null
      })
    }

  }
  render() {
    return (
      <ul className="accordion">
        {(this.props.sections !== []) ?
        (this.props.sections.map((e, index) => 
        <li className="section-component" key={ index } >
          <button className="section-button" id={ index } onClick={this.handleButtonClick}>{e.title}</button>
          {this.state.openItem === index ? <p className="section-details">{this.props.sections[index].content}</p> : <l1></l1>}
        </li>)) : ''
        }
      </ul>
    )
  }
}

export default Accordion;