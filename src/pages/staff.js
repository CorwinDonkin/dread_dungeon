import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote"
import Name from "../components/name"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"
import World, { getWorld } from "../model/world"

class Staff extends React.Component {
  constructor(props) {
    super(props)
    this.state = { world: getWorld() }
  }

  render() {
    let { name } = this.state.world
    return (
      <Layout>
        <SEO title="Staff Wanted"/>
        <h1>Staff Wanted</h1>
        <p>
          With a might heave you push open the door and backwards tumble into
          the dark space ahead.
        </p><p>
        <Quote>Slam!</Quote> cries the Staff Door</p>
        <p>And shutting leaves limited
          lumination leaking from a magic message bored into the wall of this hall
        </p>
        <p>The bored board glows &mdash; </p>
        <p><Quote>Welcome and congratulations to <Name>{name}</Name>
          our new Dungeon Commander!</Quote></p>
        <ButtonToolbar>
          <Choose to="/help" option="What's Next...? Help needed!"/>
        </ButtonToolbar>
      </Layout>
    )
  }
}

export default Staff
