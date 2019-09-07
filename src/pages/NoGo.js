import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"
import Welcome from "../components/welcome"
import Quote from "../components/quote"

const NoGo = () => (
  <Layout>
    <SEO title="Oh No!"/>
    <h1>My Name is My Own</h1>
    <h2>The Story So Far...</h2>
    <Welcome/>
    <h2>And now</h2>
    <p><Quote>My name is my own. And it's all that I own. So proudly I doth decline."</Quote> you rhyme.</p>
    <p>David with dread and a shake of the head said "Into the sky, I wave you goodbye with a sigh."</p>
    <p>
      <Quote>And these magic boots were made for launching, and launching they shall do.</Quote> kicked the merry David.
    </p>
    <p>
      The view is even better from <Counter start={100} maxValue={9001}/>m above...
    </p>

    <ButtonToolbar>
      <Choose to="/" option="Return in your next life"/>
    </ButtonToolbar>
  </Layout>
)

export default NoGo
