import React, { Component } from 'react'
import { IssuesViewer } from './containers'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
  				<h1>React Issues Table</h1>
          <p>
            A "homework" aka "test task" for position of Front-end Web developer in well known public company on the travel market.
          </p>
        </header>

        <IssuesViewer />

        <footer>
          <p>
            <a rel="author noopener noreferrer" target="_blank" href="https://github.com/karpolan/react-issues-table">Source code on GitHub</a>.
            Copyright &copy;{" "}<a rel="author noopener noreferrer" target="_blank" href="https://karpolan.com">KARPOLAN</a>
          </p>
        </footer>        
      </div>
    );
  }
}

export default App
