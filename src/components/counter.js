import React from "react"
import PropTypes from "prop-types"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: parseInt(props.start),
    }
  }


  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
      if (this.state.count >= this.props.maxValue) {
        clearInterval(this.timer)
      }
    }, 10)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <span>{this.state.count}</span>
    )
  }
}

Counter.propTypes = {
  start: PropTypes.number,
  maxValue: PropTypes.number,
}

export default Counter