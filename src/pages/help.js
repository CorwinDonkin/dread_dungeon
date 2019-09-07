import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import World from "../model/world"

class Staff extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Help Needed!"/>
        <h1>Help Needed...!</h1>
        <p>
          What happens next...? Only you can finish this story...!
        </p>
      </Layout>
    )
  }
}

export default Staff
