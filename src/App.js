import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IssuesTable} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssuesTable />
      </div>
    );
  }
}

export default App;
