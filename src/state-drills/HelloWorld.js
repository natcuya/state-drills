import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world',
  };

  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <button
          onClick={() => this.setState({ who: 'World' })}
        >
          World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'Friend' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React' })}
        >
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld;