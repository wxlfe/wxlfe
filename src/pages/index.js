import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', textAlign: 'center', height: '45rem', }}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', }}>
        <h1 style={{ fontSize: '10rem', fontWeight: '200', }}>wxlfe</h1>
      </div>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', }}>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', }}>
          <a href='#' style={{ textDecoration: 'none', color: 'white', margin: '.5em' }}>github</a>
          <a href='#' style={{ textDecoration: 'none', color: 'white', margin: '.5em' }}>linkedin</a>
          <a href='#' style={{ textDecoration: 'none', color: 'white', margin: '.5em' }}>email</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
