import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/Container";


class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          gameActive: true,
          score: 0,
          topScore: 0,
          clickedItems: []
      };
      this.checkForDuplicates = this.checkForDuplicates.bind(this);
      this.runComparison = this.runComparison.bind(this);
      this.calcScore = this.calcScore.bind(this);
  }

  
  checkForDuplicates(key) {
        this.runComparison(key);
  };

  runComparison = (key) =>{
      if(this.state.clickedItems.length === 0) {
        this.state.clickedItems.push(key)
        this.calcScore();
        return 
      }
      else{
        for (let item of this.state.clickedItems) {
          if(item === key) {
              // clicked item HAS already been clicked
              alert('game over');
              this.setState({
                gameActive: false,
                score: 0,
                clickedItems: []
              })
              break
          }
          else if(item !== key){
              // clicked item has NOT been clicked before
              this.calcScore();
          } 
        }
      }
      this.state.clickedItems.push(key)
    };

    calcScore = () => {
      if (this.state.score >= this.state.topScore){
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1,
        })
      }else if (this.state.score < this.state.topScore) {
        this.setState({
          score: this.state.score + 1,
        })
      }
    }
          

    render() {
      return (
        <div className="App">
          <Header 
            gameActive={this.state.gameActive}
            score={this.state.score}
            topScore={this.state.topScore}
          />
          <Hero />
          <Container 
            checkForDuplicates={this.checkForDuplicates}
            score={this.state.score}
          />
        </div>
      );
    }
}

export default App;