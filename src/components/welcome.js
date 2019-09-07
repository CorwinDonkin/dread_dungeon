import React from "react"
import Quote from "./quote"

class Welcome extends React.PureComponent {
  render() {
    return (
      <div>
        <p><Quote>Welcome to Dungeon Dread, Traveller! My name is David Half-Dwarven</Quote> said Half-Dwarven David,
          standing at
          the end of a windings path leading up from the head of the Vale. All around stand snowy-capped mountains,
          resplendent in their winter coats, staring stolidly down.</p>
        <p><Quote>All Travellers who wish to pass must pay me a toll - namely their name!</Quote></p>
      </div>
    )
  }
}

export default Welcome