import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tanzakuList, setTanzakuList] = useState([]);
  const [update, setUpdate] = useState(0);

  const addTanzaku = () => {
    var tzkList = tanzakuList;
    var color;
    var colorNum = Math.random() * 15;
    var newTanzaku;

    if (colorNum <= 5) {
      color = "#3de068";
    } else if(colorNum <= 10){
      color = "#e88c13";
    } else{
      color = "#138ce8";
    }

    newTanzaku = {
      bg : color,
      top : Math.random * 100,
      left : Math.random * 100,
    };

    tzkList.push(newTanzaku);
    setTanzakuList(tzkList);
    setUpdate(update + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
