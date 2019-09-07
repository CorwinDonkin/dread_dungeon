import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import { ButtonToolbar, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import Choose from "../components/choose"
import {resetWorld, setName} from "../model/world"

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    resetWorld();
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section>
          <h1>Welcome to Dungeon Dread</h1>
          <Welcome/>
          <Container>
            <Row>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Name me your name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(event) => setName(event.target.value)}/>
              </InputGroup>
            </Row>
          </Container>

          <ButtonToolbar>
            <Choose to="/Go" option="Give David your name"/>
            <Choose to="/NoGo" option="Proudly Decline"/>
          </ButtonToolbar>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
