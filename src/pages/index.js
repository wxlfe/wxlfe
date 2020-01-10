import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', textAlign: 'center', height: '50vh', maxWidth: '90vw' }}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', }}>
        <h1 style={{ fontSize: '20vw', fontWeight: '200', }}>wxlfe</h1>
      </div>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', }}>
          <a href='https://github.com/wxlfe' style={{ textDecoration: 'none', color: 'white', margin: '.5em', fontSize: '4vw', }}>github</a>
          <a href='https://linkedin.com/in/wxlfe' style={{ textDecoration: 'none', color: 'white', margin: '.5em', fontSize: '4vw', }}>linkedin</a>
          <a href='mailto:nate@wxlfe.dev' style={{ textDecoration: 'none', color: 'white', margin: '.5em', fontSize: '4vw', }}>email</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
