import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { MyComponentTrans } from './MyComponentTrans';
import image from './pirate.jpg';

const styles = {
  width: '100%',
  height: '800px',
  color: 'white',
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
};

function App() {

  const [input, setInput] = useState("");
  const[responseData, setResponseData] = useState([]);

  function onClick() {
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
      },
        body:   JSON.stringify({text:input})
      };
      fetch(`${proxy}https://api.funtranslations.com/translate/pirate.json`, requestOptions)
      .then(response => response.json())
      .then(data => setResponseData(data));
  };  

  const pirate = responseData.contents ? responseData.contents.translated: null;

  return (
    <div className="App">
       <header className="App-header"><link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
/>    
      </header>

      <div style = {styles}>
        <header>
         
          <br />
          <h1>So, you wanty to talk like me you scurvy dog!</h1>
          <br />
          
          <h3>Just type below and then click the "Jim Lad!" button to be just like Long John!</h3>
          <br />
        </header>
        <br />
        <br />
        
        <div className="text">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type here you, dog!"
        />   
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />    
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />        
      <button onClick={onClick}>Jim, lad! </button>
      <br />
      </div>
      <MyComponentTrans pirate = {pirate} />
    </div>
  );
}

export default App;
