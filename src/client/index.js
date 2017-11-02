import React from 'react'
import ReactDOM from 'react-dom'
import InputRange from 'react-input-range'
import './styles.scss'

class SupplyDemandApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 5,
      value2: 10,
      value3: 10,
      value4: {
        min: 5,
        max: 10
      }
    }
  }

  render () {
    return (
      <form className='form'>
        <label>React</label>
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onChangeComplete={value => console.log(value)} />

        <label>Node</label>
        <InputRange
          maxValue={20}
          minValue={0}
          disabled
          value={this.state.value2}
          onChange={value => this.setState({ value })}
          onChangeComplete={value => console.log(value)} />

        <label>PHP</label>
        <InputRange
          maxValue={20}
          minValue={0}
          formatLabel={value => value.toFixed(2)}
          value={this.state.value3}
          onChange={value => this.setState({ value3: value })}
          onChangeComplete={value => console.log(value)} />

        <label>Angular</label>
        <InputRange
          maxValue={20}
          minValue={0}
          formatLabel={value => `${value} devs`}
          value={this.state.value4}
          onChange={value => this.setState({ value4: value })}
          onChangeComplete={value => console.log(value)} />

      </form>
    )
  }
}

ReactDOM.render(
  <SupplyDemandApp />,
  document.getElementById('app')
)
