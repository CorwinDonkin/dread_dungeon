import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"
import Welcome from "../components/welcome"
import Intro from "../components/intro"
import Doors from "../components/doors"
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
        <SEO title="Down in the Dell"/>
        <h1>The Adventure starts, yo bro</h1>
        <h2>The Story So Far...</h2>
        <Welcome/>
        <Intro name={name}/>
        <h2>And Now...</h2>
        <Doors/>
        <ButtonToolbar>
          <Choose to="/adventurer" option="Open Adventurer Door"/>
          <Choose to="/staff" option="Open Staff Door" />
          <Choose to="/" option="Return in another life" />
        </ButtonToolbar>
      </Layout>
    )
  }
}

export default Go
