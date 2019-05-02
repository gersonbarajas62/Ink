import React, { Component } from 'react';
// RHL only for front end development
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Book from './Components/Book.jsx'
import Navigation from './Components/Navigation.jsx'
import axios from 'axios';
import MapContainer from './Components/MapContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (

      <BrowserRouter>
        <div >
          <Navigation />


            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} data={this.state.styles} selectStyles={this.selectStyles} style={this.state.style}/>} />
              <Route path="/map" component={MapContainer }></Route>
              <Route path="/login" ></Route>          
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default App;
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;