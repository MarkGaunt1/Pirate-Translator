import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import image from './sea.jpg'

const sea = {
  width: '100%',
  height: '800px',

  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
}

export function MyComponentTrans(props) {
  
  return (
    <div style = {sea}>
      <br />
      <br />
      <br />


      <h2>{props.pirate}</h2>     
    
    
    </div> 
        );
    }