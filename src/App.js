import React from "react";
import './App.css';
import imgSrc from "./ProfileImg.jpg";
import { useState } from 'react';

class App extends React.Component {

  state = {
    Person: {
      fullName: "Tinhinane SEDDIK",
      imgSrc: imgSrc,
      profession: "Software developer",
      bio: "A developer, student at university, a lover of books and new discovery,always ready and motivated for challenges."
    },
    show: false,
    
    counter: 0
  };
  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  componentDidMount() {
   
    setInterval(this.incrementCounter, 1000);
  }

  handleClick = () => this.setState({ show: !this.state.show })

  render() {
    const styleProfile = {
      color: 'black', display: 'flex', margin: "40px 60px",
      justifyItems: 'center', textAlign: 'start',

    }

    return (
      <>

        <div className="show">
          <h1>The component mounted</h1>
          <h2>{this.state.counter}</h2>
          {}
          <button onClick={this.handleClick}> {this.state.show ? 'Hide MY Profile' : 'Show My Profile'} </button>
          {(this.state.show) &&
            <div style={styleProfile}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                <div>
                  <img src={this.state.Person.imgSrc} alt="Profile Image" /></div>
              </div>
              <div style={{ margin: '50px 80px' }} >
                <h1>{this.state.Person.fullName}</h1>
                <h4>{this.state.Person.profession}</h4>
                <span> {this.state.Person.bio} </span>
              </div>
            </div>
          }
        </div>

      </>
    )
  }
}

export default App;
