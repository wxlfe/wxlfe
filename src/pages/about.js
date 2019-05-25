import React from "react"
import { Link } from "gatsby"

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
            <p style={{ marginRight: '1em', }}>JavaScript</p>
            <p style={{ marginRight: '1em', }}>Java</p>
            <p style={{ marginRight: '1em', }}>Android Development</p>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}>
            <p style={{ marginRight: '1em', }}>Linux</p>
            <p style={{ marginRight: '1em', }}>React JS</p>
            <p style={{ marginRight: '1em', }}>Python</p>
        </div>
        <div>
            <h2>Education</h2>
            <h3 style={{ marginBottom: '0' }}>Kennesaw State University</h3>
            <h4 style={{ marginBottom: '0' }}>2019 - Present</h4>
            <p>
                I'll be transferring to Kennesaw State this fall semester to finish a Bachelor's program in Computer Science. I've already participated in Game Jam at Kennesaw (See "Project Way Back" on the projects page).
            </p>
            <h3 style={{ marginBottom: '0' }}>Dalton State College</h3>
            <h4 style={{ marginBottom: '0' }}>2017 - 2019</h4>
            <p>
                I went to Dalton State for the first two years of college, taking my core classes as well as Programming I, Programming II, and Data Structures. 
            </p>
            <h3 style={{ marginBottom: '0' }}>Heritage High School</h3>
            <h4 style={{ marginBottom: '0' }}>2013 - 2017</h4>
            <p>
                I left Heritage High School with a 3.68 GPA after making straight A's through the entire programming class pathway. At the end of the pathway, I was one of four students who passed the final test and got Microsoft's MTA Certificate in Web App Fundamentals. 
            </p>
        </div>
    </div>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }}>
        <div>
            <h2>Experience</h2>
            <h3 style={{ marginBottom: '0' }}>Mohawk Industries - Data Analyst Intern</h3>
            <h4 style={{ marginBottom: '0' }}>Calhoun, February 2019 - Present</h4>
            <p>
                I started at Mohawk Industries in February 2019 as a Data Analyst Intern. I've used data analytics tools like Power BI and Tableau, and learned about practical database structure and usage. I've also helped other departments with various projects. I built a brand new progressive web app for Benefits using GatsbyJS, and am working on a chatbot for HR. 
            </p>
            <h3 style={{ marginBottom: '0' }}>Arby's - Sandwich Engineer</h3>
            <h4 style={{ marginBottom: '0' }}>Ringgold, July 2018 - February 2019</h4>
            <p>
                I joined the original team at Arby's, helping to open a brand new store. I learned how to set high but achievable standards for myself and others with minimal established standards. 
            </p>
            <h3 style={{ marginBottom: '0' }}>Zaxby's - Chicken Technician</h3>
            <h4 style={{ marginBottom: '0' }}>Ringgold, December 2016 - July 2018</h4>
            <p>
                I worked at Zaxby's for over a year, and that's where I learned the fundamentals of teambuilding and team communication. I also learned several ways to fry chicken. 
            </p>
            <h3 style={{ marginBottom: '0' }}>Artsy Classes - Instructor</h3>
            <h4 style={{ marginBottom: '0' }}>Ringgold, Summer 2016</h4>
            <p>
                Over the summer between my junior and senior years of high school, I taught introductory-level programming to students ages 8 to 14 at a summer camp, using tools as simple as Scratch and as complex as the Unity Game Engine.
            </p>
        </div>
    </div>
  </Layout>
)

export default AboutPage
