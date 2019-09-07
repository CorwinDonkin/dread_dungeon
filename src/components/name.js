import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Name = ({ children }) => {
  return (
    <span style={{
      fontFamily: "Pacifico",
      color: "darkred",
      paddingLeft: "0.33rem",
      paddingRight: "0.33rem",
    }}>{children}</span>
  )
}

Name.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Name
