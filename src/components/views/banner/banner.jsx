import React, { Component } from 'react';
import Radium from 'radium';
import logoWhite from './../../../assets/veritas-logo-white.png';
//const storage = require('electron-storage');
import writeIt from './../../../../renderer.js';
//import fs from 'fs';
//var fs = require('fs')

const Banner = () => {
  return (
    <div style={ banner }>
    <button onClick=
    
    {function() {
      writeIt({
        "poop": "chewie"
      });
    }}

    >Click me</button>
      <div style={ logo }></div>
    </div>
  );
};

const banner = {
  color: 'white',
  display: 'flex',
  backgroundColor: '#131544',
  height: '56px',
}

const logo = {
    width: '300px',
    backgroundImage: `url(${ logoWhite })`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

export default Radium(Banner);

