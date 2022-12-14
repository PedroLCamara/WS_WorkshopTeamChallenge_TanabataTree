import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import bambuImg from '../src/Assets/bambu.png';
import blue from "../src/Assets/Azul_sem_escrita.png";
import orange from "../src/Assets/Laranja_sem_escrita.png";
import green from "../src/Assets/Verde_sem_escrita.png";
import blueTxt from "../src/Assets/Azul_COM_escrita.png";
import orangeTxt from "../src/Assets/Laranja_COM_escrita.png";
import greenTxt from "../src/Assets/Verde_COM_escrita.png";

function App() {
  const [tanzakuList, setTanzakuList] = useState([]);
  const [update, setUpdate] = useState(0);
  const [text, setText] = useState("");

  const addTanzaku = (e) => {
    e.preventDefault();
    var tzkList = tanzakuList;
    var color;
    var colorNum = Math.random() * 15;
    var topNum = Math.random() * 500;
    var leftNum = Math.random() * 275;
    console.log(colorNum);
    console.log(topNum);
    console.log(leftNum);
    var newTanzaku;

    const tree = document.getElementById("tree");
    const bg = document.getElementById("bg");
    const tzkModal = document.getElementById("tzk-modal");
    
    tzkModal.style.opacity = "0";
    tree.style.transform = "translateY(10%)";
    bg.style.backgroundPositionY = "10%";
    if (text == "") {
      if (colorNum <= 5) {
        color = blueTxt;
      } else if (colorNum <= 10) {
        color = orangeTxt;
      } else {
        color = greenTxt;
      }
    }
    else {
      if (colorNum <= 5) {
        color = blue;
      } else if (colorNum <= 10) {
        color = orange;
      } else {
        color = green;
      }
    }

    newTanzaku = {
      bg: color,
      top: (topNum).toString().split(".")[0] + "px",
      left: (leftNum).toString().split(".")[0] + "px",
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

  const showTzkModal = (e) => {
    e.preventDefault();
    const tzkModal = document.getElementById("tzk-modal");
    tzkModal.style.opacity = "1";

    const tree = document.getElementById("tree");
    const bg = document.getElementById("bg");
    tree.style.transform = "translateY(10%)";
    bg.style.backgroundPositionY = "10%";
  }

  const hideTzkModal = (e) => {
    e.preventDefault();
    const tzkModal = document.getElementById("tzk-modal");
    tzkModal.style.opacity = "0";

    const tree = document.getElementById("tree");
    const bg = document.getElementById("bg");
    tree.style.transform = "translateY(0%)";
    bg.style.backgroundPositionY = "20%";
  } 

  return (
    <div className='body' id='bg'>
      <section>
        <button className="add_tanzaku" onClick={(e) => showTzkModal(e)}>
          Adicionar
        </button>
        <div className="bambu" id='tree'>
          <div>
            {
              tanzakuList.map((tanzakuItem) => {
                return (
                  <div className='sm-tzk' style={{top : tanzakuItem.top, left : tanzakuItem.left}}>
                    <span className='tzk-txt'>{tanzakuItem.text}</span>
                    <img src={tanzakuItem.bg}></img>
                  </div>
                );
              })
            }
          </div>
          <img src={bambuImg}></img>
        </div>
        <div className="tanzaku" id='tzk-modal'>
          <input type="text" name="Tanzaku" id="Tanzaku" value={text} onChange={(e) => setText(e.target.value)} />
          <div className="botoes">
            <button id="cancelar" onClick={(e) => hideTzkModal(e)}> Cancelar </button>
            <button id="enviar" onClick={(e) => addTanzaku(e)}> Enviar </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
