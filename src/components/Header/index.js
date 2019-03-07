import React from "react";

export default class Header extends React.Component {
  render() {
      return (
        <div className='header'>
            <p className='logo'>Clicky</p>
            <p className='instructions'>Click an image to begin!</p>
            <p className='scores'>Score:{this.props.score} | TopScore:{this.props.topScore}</p>
        </div>
      );
  }
}