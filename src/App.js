import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mohamed! you got this!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Found it
          <p> I'm quite excited to get cracking with react, seems like alot of doors will open with it</p>
        </a>
      </header>
    </div>
  );
}

export default App;
