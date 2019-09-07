import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"
import { navigate } from "@reach/router"
import World from '../model/world'

class Choose extends React.PureComponent {

  onClick = () => {
    let { to } = this.props
    navigate(to)
  }

  render() {
    let { option } = this.props
    return (
      <Button
        variant="outline-primary"
        style={{ margin: "1em" }}
        onClick={this.onClick}
      >
        {option}
      </Button>
    )
  }
}

Choose.propTypes = {
  to: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired
}

export default Choose