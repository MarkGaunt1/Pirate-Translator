import React,{useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export function MyComponentTrans() {
    const [input, setInput] = useState("");
    const[responseData, setResponseData] = useState([]);
  
    function onClick() {
        const requestOptions = {
          method: 'POST',
          body:   JSON.stringify({text:input})
        };
        fetch("https://api.funtranslations.com/translate/pirate.json", requestOptions)
        .then(response => response.json())
        .then(data => setResponseData(data));
    };  
    
    return (
           <div>
<Container fluid >
        <Row>
        <Col>
        <header>
        <h1>Arrr.. talk like me you scurvy dog!</h1>
        </header>
        <br />
      <div className="text">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Normal text"
        />   
      </div>
      <br />
      <button onClick={onClick}>Jim, lad!</button>
      <br />
      <h2>{responseData}</h2>
        </Col>
        </Row>
      </Container>
      <br />     
            </div> 
        );
    }