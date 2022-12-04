import React, { Component } from 'react';
import './App.css';
import TextAnimation from './components/TextAnimation';

class App extends Component {
  constructor(props: {}) {
    super(props);
    this.state = { textIndex: 0 };
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will run every second!');
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <p>
            I write <TextAnimation></TextAnimation>
          </p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/louis-machiels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="App-link"
            href="https://github.com/LouisMach/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </header>
      </div>
    );
  }
}

export default App;
