import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state= {
        keyword: ""
      }
      this.updateKey = this.updateKey.bind(this);
    }
  

  updateKey(e){
    this.setState({
      keyword: e.target.value
    })
  }

  render() {

    const locations = [ "Durban,SA" , "Cape Town,SA" ,"PE,SA" , "Johannesburg,SA", "Pretoria,SA", "Delhi,India", "Gujarat,India", "Big Ben,UK" , "California,USA" , "London,UK" ]
    var keyChars =[];
    var count = 0;
    return (
      <div className="App">
        <p>Enter location:</p>
        <input type="text" onChange={this.updateKey}/>
        <ul>
          {
            locations.map((location, i)=>{
              count = 0;
              keyChars = this.state.keyword.split("");
              keyChars.forEach((letter)=>{
                if(location.indexOf(letter.toLowerCase()) > -1 || location.indexOf(letter.toUpperCase()) > -1){
                  count++;
                }
              })

              if(count === keyChars.length){
                return <li key={i}>{location}</li>
              }
          })}
        </ul>
      </div>
    );
  }
}

export default App;
