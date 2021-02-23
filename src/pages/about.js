import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h1 style={{ textAlign: 'center' }}>Nate Wolfe</h1>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}>
            <h2 style={{ marginRight: '1em', }}>Skills:</h2>
            <p style={{ marginRight: '1em', }}>Linux</p>
            <p style={{ marginRight: '1em', }}>Java & C#</p>
            <p style={{ marginRight: '1em', }}>Data Analytics</p>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}>
            <p style={{ marginRight: '1em', }}>JavaScript</p>
            <p style={{ marginRight: '1em', }}>React JS</p>
            <p style={{ marginRight: '1em', }}>Python</p>
        </div>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }}>
        <div>
            <h2>Experience</h2>
            <h3 style={{ marginBottom: '0' }}>Mohawk Industries - Associate Developer</h3>
            <h4 style={{ marginBottom: '0' }}>Calhoun, February 2021 - Present</h4>
            <p>
                I'm currently an Associate Developer at Mohawk Industries, working on customer-facing web apps for the largest flooring manufacturer in the world, a Fortune 500 company.
            </p>
            <h3 style={{ marginBottom: '0' }}>Food Lion - Grocer</h3>
            <h4>Ringgold, December 2020 - February 2021</h4>
            <h3 style={{ marginBottom: '0' }}>Dalton State College - Tutor</h3>
            <h4 style={{ marginBottom: '0' }}>Dalton, January 2020 - December 2020</h4>
            <p>
                I was the only tutor at Dalton State qualified to tutor in the programming courses the college offers, as well as other courses in mathematics and science.
            </p>
            <h3 style={{ marginBottom: '0' }}>Mohawk Industries - Data Analyst Intern</h3>
            <h4 style={{ marginBottom: '0' }}>Calhoun, February 2019 - August 2019</h4>
            <p>
                I started at Mohawk Industries in February 2019 as a Data Analyst Intern. I used data analytics tools like Power BI and Tableau, and learned about practical database structure and usage. I also taught myself Python and SQL on the job.
            </p>
            <h3 style={{ marginBottom: '0' }}>Arby's - Sandwich Engineer</h3>
            <h4>Ringgold, July 2018 - February 2019, January 2020 - July 2020</h4>
            <h3 style={{ marginBottom: '0' }}>Zaxby's - Chicken Technician</h3>
            <h4>Ringgold, December 2016 - July 2018</h4>
            <h3 style={{ marginBottom: '0' }}>Artsy Classes - Instructor</h3>
            <h4 style={{ marginBottom: '0' }}>Ringgold, Summer 2016</h4>
            <p>
                Over the summer between my junior and senior years of high school, I taught introductory-level programming to students ages 8 to 14 at a summer camp, using tools as simple as Scratch and as complex as the Unity Game Engine.
            </p>
        </div>
    </div>
        <div>
            <h2>Certifications</h2>
            <h3 style={{ marginBottom: '0' }}>MTA: HTML5 Application Development Fundamentals</h3>
            <h3 style={{ marginBottom: '0' }}>Microsoft</h3>
            <h4 style={{ marginBottom: '0' }}>May 2016</h4>
            <p>
                I passed the necessary test and received Microsoft's Web Applications Development certification my junior year of high school, having learned the application life cycle, HTML5 UI design, CSS UI formatting, and JavaScript.
            </p>
            <h3 style={{ marginBottom: '0' }}>Java, C#, SQL, HTML, CSS, and JavaScript</h3>
            <h3 style={{ marginBottom: '0' }}>SoloLearn</h3>
            <h4 style={{ marginBottom: '0' }}>November 2020</h4>
            <p>
                I have completed the SoloLearn courses and received the corresponding certificates for all of these languages. SoloLearn is largely a beginner's tool, so I decided to get these certificates simply to show that I have experience in these languages. 
            </p>
        </div>
        <div>
            <h2>Education</h2>
            <h3 style={{ marginBottom: '0' }}>Dalton State College - BS, Mathematics</h3>
            <h4 style={{ marginBottom: '0' }}>2020 - Present</h4>
            <p>
                I'm continuing at Dalton State to pursue a Math degree. Better knowledge of pure mathematics will help me to accomplish what I want in life as it pertains to software security and optimization. 
            </p>
            <h3 style={{ marginBottom: '0' }}>Dalton State College - AS, Computer Science</h3>
            <h4 style={{ marginBottom: '0' }}>2017 - 2019</h4>
            <p>
                I completed the Computer Science program at Dalton State, and received the Associate of Science degree in Computer Science. 
            </p>
            <h3 style={{ marginBottom: '0' }}>Heritage High School</h3>
            <h4 style={{ marginBottom: '0' }}>2013 - 2017</h4>
            <p>
                I left Heritage High School with a 3.68 GPA after making straight A's through the entire programming class pathway. At the end of the pathway, I was one of four students who passed the final test and got Microsoft's MTA Certificate in Web App Fundamentals. 
            </p>
        </div>
    </div>
  </Layout>
)

export default AboutPage
