import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', textAlign: 'center', height: '50vw', }}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', }}>
        <h1 style={{ fontSize: '10rem', fontWeight: '200', }}>wxlfe</h1>
        <p>nate wolfe</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
