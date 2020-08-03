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
        <p>
            Hi, I'm Nate. I recently earned my Associate's Degree in Computer Science from Dalton State, and I'm pursuing my Bachelor's Degree in Mathematics. I'm primarily interested in Web 3 and the accompanying technologies built on blockchains such as Ethereum, as these new technologies could do wonders for user privacy and security. I'm experienced in front-end web development and design, frameworks such as React, Angular, and JQuery, and languages such as Java, C#, SQL, and Python. 
        </p>
        <p>
            If you'd like to save this site for later, try pinning it to your home screen - it's a progressive web app, so it'll launch as an app!
         </p>
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
