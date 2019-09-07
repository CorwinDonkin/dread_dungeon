import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Choose from "../components/choose"
import { ButtonToolbar } from "react-bootstrap"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <h1>So Far from Dungeon Dread</h1>
    <p>But don't despair &mdash; Dungeon Dread is already ready...</p>
    <ButtonToolbar>
      <Choose to="/" option="Take the Road to Dungeon Dread"/>
    </ButtonToolbar>
  </Layout>
)

export default NotFoundPage
