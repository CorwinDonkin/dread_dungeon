import React from "react"


const Quote = ({ children }) => {
  return (
    <span>
      <span style={{ fontWeight: "bold" }}>&ldquo;</span>
      <span>{children}</span>
      <span style={{ fontWeight: "bold" }}>&rdquo;</span>
    </span>
  )
}

export default Quote