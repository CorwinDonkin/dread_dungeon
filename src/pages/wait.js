import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"
import Welcome from "../components/welcome"
import Intro from "../components/intro"
import Doors from "../components/doors"
import Adventure from "../components/adventure"
import World, { getWorld } from "../model/world"
import Counter from "../components/counter"

class Wait extends React.Component {
  constructor(props) {
    super(props)
    this.state = { world: getWorld() }
  }

  render() {
    let { name } = this.state.world
    return (
      <Layout>
        <SEO title="Sleepy-sleep bye bye"/>
        <h1>The Adventure starts</h1>
        <h2>The Story So Far...</h2>
        <Welcome/>
        <Intro name={name}/>
        <Doors/>
        <Adventure/>
        <h2>And Now...</h2>
        <p>Spotting a snuggly mossy tuft, you settle back to await an opening.
          An incredibly comfortable cosy chair.
        </p>
        <p>
          Your eyelids droop...</p>
        <p>
          Night dances with Day, Day dallies with Night.
        </p><p>
        Round and Round, Around and Around.
      </p><p>
        Above the Moon beams <Counter start={1} maxValue={1000000}/> times and times again...
      </p>
        <ButtonToolbar>
          <Choose to="/" option="Better luck in your next life..."/>
        </ButtonToolbar>
      </Layout>
    )
  }
}

export default Wait
