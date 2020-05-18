import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style/Navigation.css';

import Home from '../Pages/Home';
import About from '../Pages/About';

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isVisible: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( state => ({
      isVisible: !state.isVisible
    }));
  }
  
  
  render() {
    return (
      <div className='menu'>
          <button onClick={this.handleClick} id="menu-btn"></button>
          <div className='menu-list'>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>

          <Router>
           <Switch>
             <Route  exact path='/' component={Home} />
             <Route  exact path='/about' component={About} />
           </Switch>
         </Router>
      </div>
    )
  }
}
