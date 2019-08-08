import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="projects" />
    <h1 style={{ textAlign: 'center' }}>Projects</h1>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }}>
        <div>
            <div style={{ textAlign: 'center' }}>
                <iframe title="Project: Way Back YouTube Video" width="80%" height="315" src="https://www.youtube.com/embed/8okNNvdRwgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h2 style={{ marginBottom: '0' }}>Project: Way Back</h2>
            <h4 style={{ marginBottom: '0' }}>Kennesaw State, Global Game Jam 2019</h4>
            <p>
                At Kennesaw State’s Global Game Jam 2019, I was on a team that created a game titled “Project Way Back”, created with the Unity game engine over the course of a weekend.
                The theme we were given to build a game around was home, and what it meant to us. Bonus points were given for incorporating the word "transmission" in any way. 
                We decided to build a game in which the player plays as a mother, trying to keep up with her daughter, who's running away. After the daughter gets lost, the player switches to her perspective, and must find their way home from an alternate dimension.  
            </p>
        </div>
    </div>
  </Layout>
)

export default ProjectsPage
