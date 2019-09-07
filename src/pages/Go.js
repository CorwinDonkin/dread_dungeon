import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"
import Welcome from "../components/welcome"
import Intro from "../components/intro"
import World, { getWorld } from "../model/world"

class Go extends React.Component {
  constructor(props) {
    super(props)
    this.state = { world: getWorld() }
  }

  render() {
    let world = this.state.world
    let { name } = world
    return (
      <Layout>
        <SEO title="Oh Yes!"/>
        <h1>The Adventure starts</h1>
        <h2>The Story So Far...</h2>
        <Welcome/>
        <h2>And Now...</h2>
        <Intro name={name}/>
        <ButtonToolbar>
          <Choose to="/" option="Run away and return in another life"/>
          <Choose to="/dell" option="To The Dell...!"/>
        </ButtonToolbar>
      </Layout>
    )
  }
}

export default Go
