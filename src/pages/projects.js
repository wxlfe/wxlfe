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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
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
            <div>
                <h2 style={{ marginBottom: '0' }}>Custom Email</h2>
                <h4 style={{ marginBottom: '0' }}>2019</h4>
                <p>
                    Toward the end of 2019, I wanted to learn more about DNS and DNS records, as well as email mechanics and how they could be used more securely. I ended up creating a custom-domain email address, hosted by ProtonMail in Switzerland. I learned quite a bit about DNS records and how end-to-end encryption can still be used using a custom domain.  
                </p>
            </div>
        </div>
    </div>
  </Layout>
)

export default ProjectsPage
