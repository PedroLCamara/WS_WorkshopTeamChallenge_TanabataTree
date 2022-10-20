import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import bambuImg from '../src/Assets/bambu.png';

function App() {
  const [tanzakuList, setTanzakuList] = useState([]);
  const [update, setUpdate] = useState(0);
  const [text, setText] = useState("");

  const addTanzaku = (e) => {
    e.preventDefault();
    var tzkList = tanzakuList;
    var color;
    var colorNum = Math.random() * 15;
    var newTanzaku;
    
    const tree = document.getElementById("tree");
    const bg = document.getElementById("bg");

    tree.style.transform = "translateY(10%)";
    bg.style.backgroundPositionY = "10%";
    if (colorNum <= 5) {
      color = "#3de068";
    } else if (colorNum <= 10) {
      color = "#e88c13";
    } else {
      color = "#138ce8";
    }
    
    newTanzaku = {
      bg: color,
      top: Math.random * 100,
      left: Math.random * 100,
      text: text
    };
    
    tzkList.push(newTanzaku);
    setTanzakuList(tzkList);
    setUpdate(update + 1);
    setText("");
    setTimeout(() => {
      tree.style.transform = "translateY(0%)";
      bg.style.backgroundPositionY = "20%";
    }, 2000)
  }

  return (
    <div className='body' id='bg'>
      <section>
        <button className="add_tanzaku" onClick={(e) => addTanzaku(e)}>
          Adicionar
        </button>
        <div className="bambu" id='tree'>
          <img src={bambuImg}></img>
        </div>
        <div className="tanzaku">
          <input type="text" name="Tanzaku" id="Tanzaku" value={text} onChange={(e) => setText(e.target.value)}/>
          <div className="botoes">
            <input type="button" value="Cancelar" id="cancelar" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
