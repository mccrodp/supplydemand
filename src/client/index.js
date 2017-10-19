import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

function component () {
  var element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  ReactDOM.render(<h1 > Hello, world! </h1>,
    document.getElementById('root')
  )

  return element
}

document.body.appendChild(component())
