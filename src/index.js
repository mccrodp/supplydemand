import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );

  return element;
}

document.body.appendChild(component());

// var express = require('express')
// var app = express()

// var DB = require('./db/bookshelf')

// app.get('/', function (req, res) {
//   res.send('This is working!!!')
// })

// var server = app.listen(3000, function () {
//   console.log('Server running on http://localhost:' + server.address().port)
// })
