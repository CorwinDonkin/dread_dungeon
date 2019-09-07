import React from "react"
import PropTypes from "prop-types"
import "./air.css"

const Air = ({ children }) => {
  return (
    <span className='Air_flyaway'>{children}</span>
  )
}

Air.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Air
