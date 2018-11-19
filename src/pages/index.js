import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import CardProject from '../components/cardProject';
import dribbble from'../images/dribbble.svg';
import linkedin from'../images/linkedin.svg';
import instagram from'../images/instagram.svg';
import twitter from'../images/twitter.svg';
import github from'../images/github.svg';
import profilePhoto from'../images/profilePhoto.jpeg';
import ContactSection from '../components/contactSection';


const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroContent">
        <h1>Not Just A Designer But A Creator</h1>
        <p>I love the full process of creating, from brainstorming, to designing and finally writing the code to bring it to life.</p>
        <a href="https://www.linkedin.com/in/dylandotolo/" target="_blank"><div className="btn">LinkedIn profile</div></a>
      </div>
    </div>

    <div className="sectionWrapper noMarginTop">
      <div className="section">
        <h2>Currently at DISCO</h2>
        <p>At DISCO, I run web design and development on the marketing team. I've had a hand in creating things such as the marketing site, support center, and internal tools like the sales toolkit. </p>
        <div className="grid">
          <div className="Cards">
            <Card 
              image={require('../images/sales-toolkit.png')}
              title="Sales Toolkit"
              text="UI·UX·Dev" />
          </div>
          <div className="Cards">
            <Card 
              image={require('../images/marketing-website.png')}
              title="Marketing Website"
              text="UI·Dev" />
          </div>
          <div className="Cards">
            <Card 
              image={require('../images/illy.png')}
              title="Illustrations"
              text="Illy" />
          </div>
        </div>
      </div>
    </div>

    <div className="sectionWrapper background">
      <div className="section alignLeft">
        <h2>Side projects</h2>
        <p>To be a creator you have to create things right? Well, I tend to build a few things here and there. I build stuff under my umbrella brand called ThemeLatte.</p>
        <div className="grid">
          <div className="Cards">
            <CardProject 
              image={require('../images/themelatte.svg')}
              title="ThemeLatte"
              text="ThemeLatte is my umbrella brand that I do freelance work as well as launch templates and themes for various platforms." />            
          </div>
          <div className="Cards">
            <CardProject 
              image={require('../images/coming-soon.svg')}
              title="Savage Fitness"
              text="ThemeLatte is my umbrella brand that I do freelance work as well as launch templates and themes for various platforms." />
          </div>
          <div className="Cards">
            <CardProject 
              image={require('../images/coming-soon.svg')}
              title="Design Systems"
              text="ThemeLatte is my umbrella brand that I do freelance work as well as launch templates and themes for various platforms." />
          </div>
        </div>
      </div>
    </div>

    <div className="sectionWrapper">
      <div className="section alignLeft">
        <div className="splitGrid">
          <div className="gridItem">
            <h2>Who am I?</h2>
            <p>At DISCO, I run the web design and development on the marketing team. I've had a hand in creating things such as the marketing site, support center, and internal tools like the sales toolkit. At DISCO, I run the web design and development on the marketing team. I've had a hand in creating things such as the marketing site, support center, and internal tools like the sales toolkit. </p>
            <div className="socialIcons">
              <div className="socialIcon">
                <a href="https://www.linkedin.com/in/dylandotolo/" target="_blank">
                  <img src={linkedin} alt=""/>
                </a>
              </div>
              <div className="socialIcon">
              <a href="https://dribbble.com/dylan-dotolo" target="_blank">
                <img src={dribbble} alt=""/>
              </a>
              </div>
              <div className="socialIcon">
                <a href="https://www.instagram.com/dylandotolo/" target="_blank">
                  <img src={instagram} alt=""/>
                </a>
              </div>
              <div className="socialIcon">
                <a href="https://twitter.com/Dotolo2" target="_blank">
                  <img src={twitter} alt=""/>
                </a>
              </div>
              <div className="socialIcon">
                <a href="https://github.com/dot2" target="_blank">
                  <img src={github} alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="photoCard">
              <img src={profilePhoto} alt=""/>
              <div className="photoMeta">
                <span>South Africa | 2018</span>
                <a href="https://photos.app.goo.gl/BZVryzW1X3AePUCE9" target="_blank">View album</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactSection />

  </div>
)

export default IndexPage
