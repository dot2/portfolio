import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroContent">
        <h1>Not Just A Designer But A Creator</h1>
        <p>I love the full process of creating, from brainstorming, to designing and finally writing the code to bring it to life.</p>
        <div className="btn">LinkedIn profile</div>
      </div>
    </div>

    <div className="sectionWrapper">
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
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
