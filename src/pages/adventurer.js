import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"
import Welcome from "../components/welcome"
import Intro from "../components/intro"
import Doors from "../components/doors"
import Adventure from "../components/adventure"
import {getWorld} from "../model/world"

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
        <SEO title="Now For Adventure"/>
        <h1>The Adventure starts</h1>
        <h2>The Story So Far...</h2>
        <Welcome/>
        <Intro name={name}/>
        <Doors/>
        <h2>And Now...</h2>
        <Adventure/>
        <ButtonToolbar>
          <Choose to="/wait" option="Wait..."/>
          <Choose to="/staff" option="Open Staff Door"/>
        </ButtonToolbar>
      </Layout>
    )
  }
}

export default Go
