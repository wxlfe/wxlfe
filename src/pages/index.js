import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'space-around', textAlign: 'center', maxWidth: '90vw' }}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', }}>
        <h1 style={{ fontWeight: '200' }}>Nate Wolfe</h1>
        <h3 style={{ fontweight: '200' }}>Student, Tutor, and Software Engineer</h3>
      </div>
      <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'center', }}>
          <a href='https://github.com/wxlfe' style={{ textDecoration: 'none', color: 'white', margin: '.5em', fontSize: '4vw', }}>github</a>
          <a href='https://linkedin.com/in/wxlfe' style={{ textDecoration: 'none', color: 'white', margin: '.5em', fontSize: '4vw', }}>linkedin</a>
          <a href='mailto:nate@wxlfe.dev' style={{ textDecoration: 'none', color: 'white', margin: '.5em', fontSize: '4vw', }}>email</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
