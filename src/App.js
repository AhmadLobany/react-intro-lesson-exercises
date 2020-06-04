import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff = () => "Wild function'ed text";

  getMorningGreeting() {
  }

  getEveningGreeting() {
  }

  showCompany(name, revenue) {
    return (<div id={name}>{name} makes {revenue} every year</div>)
  }

  getClassName(temperature) {
    return (<div id="weatherBox" class={temperature<15 ? "freezing" : temperature>30 ? "hell-scape": "fair" }></div>)
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>Stuff: {this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {
              companies.map(c => this.showCompany(c.name, c.revenue))
            }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(12)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
