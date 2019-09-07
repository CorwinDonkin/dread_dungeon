import React from "react"
import Quote from "./quote"
import Name from "./name"
import Air from "./air"
import PropTypes from "prop-types"

class Intro extends React.PureComponent {
  render() {
    let { name } = this.props
    return (
      <div>
        <p><Quote>My name is my own. And it's all that I own.
          But adventuring is my aim. So proudly I doth declaim.</Quote> you rhyme</p>
        <p><Quote><Name>{name}</Name> am I</Quote></p>
        <p>David with dread and a shake of the head writes into the very air
          <Air><Name>{name}</Name></Air>
        </p>
        <p>
          <Quote>Oh very well. This is the way &mdash;</Quote> David did say
        </p>
        <p>
          <Quote>There in the Dell, the Doors doth dwell.</Quote>
        </p>
        <p>
          <Quote>So Fair Ye well from Heaven to Hell.</Quote>
        </p>
      </div>
    )
  }
}

Intro.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Intro