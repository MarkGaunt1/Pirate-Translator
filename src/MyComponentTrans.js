import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import image from './map.jpg'

const map = {
  width: '100%',
  height: '800px',
  color: 'red',
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
}

export function MyComponentTrans(props) {
  
  return (
    <div style = {map}>
      <br />
      <br />
      <br />


      <h2>{props.pirate}</h2>     
    
    
    </div> 
        );
    }