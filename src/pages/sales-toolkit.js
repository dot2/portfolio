import React from 'react'
import Link from 'gatsby-link'
import ContactSection from '../components/contactSection';

import './toolkit.css'

const SalesToolkit = () => (
    <div>
        <div className="hero">
            <div className="heroContent">
                <h1>Sales toolkit</h1>
                <p>Creating a tool to help align the product marketing team with the sales team to close more business.</p>
            </div>
        </div>

        <div className="sectionWrapper noMarginTop">
            <div className="section">
                <h2>The basics</h2>
                <p>A quick note, this tool is activily being built with new features and designs added. The following may not be the most up to date status of the project. If you are interested, chat with me and I'd love to fill you in. </p>                
                <div className="introGrid">
                    <div className="introItem">
                        <h3>Company</h3>
                        <span>DISCO</span>
                    </div>
                    <div className="introItem">
                        <h3>Role</h3>
                        <span>UI·UX·Dev</span>
                    </div>
                    <div className="introItem">
                        <h3>Launch date</h3>
                        <span>October 5, 2018</span>
                    </div>
                    <div className="introItem">
                        <h3>Website</h3>
                        <span>sales.disco.com</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="sectionWrapper">
            <div className="section">
                <div className="splitCol">
                    <div className="col">
                        <h2>Project overview</h2>
                        <p>The sales toolkit was the idea of DISCOs Director of Product Marketing, Anu Saha. The concept behind the tool was for it to be a place where all sales employees can log in and see the latest marketing materials, feature launches, upcoming events, training material and request any additional resources from the marketing team.</p>
                    </div>
                    <div className="col">
                        <div className="imgagePlaceholder"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="sectionWrapper">
            <div className="section sectionLeftTitle">
                <h2>The problem and solution</h2>
                <div className="splitCol">
                    <div className="col">
                        <h3>Problem</h3>
                        <p>The problem we were facing is there was no one source of truth for our sales team to discover resources offered by marketing. The sales team would have to ping marketing with questions or create a folder with all of the resources. Which could quickly become outdated or not fully offer everything marketing can do for them.</p>
                    </div>
                    <div className="col">
                        <h3>Solution</h3>
                        <p>To solve this problem, we needed to create a single spot where the sales team could find all resources from marketing and would always be the latest information. To do this, we decided on a dashboard under sales.csdisco.com where users would need to be authorized with their work email to access it.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="sectionWrapper">
            <div className="section sectionLeftTitle">
                <h2>The process</h2>
                <div className="splitCol">
                    <div className="col">
                        <h3>Brainstorming</h3>
                        <p>To kick off the project I sat down with Anu as well as some other stakeholders in this project to decide which content should be available in the toolkit. We drew out some ideas on the whiteboard and got a high level idea of what content we wanted and where we thought it needed to live.</p>
                    </div>
                    <div className="col">
                        <div className="imgagePlaceholder"></div>
                    </div>
                </div>
                <div className="splitCol splitCol_MarginTop">
                    <div className="col">
                        <h3>Wireframing</h3>
                        <p>After brainstorming and gathering up some example content, I started to do some quick wireframes to figure out the best layout. The wireframes allowed me to quickly iterate on a few ideas and allowed us to get a sense of what the final product could look like for the team.</p>                        
                    </div>
                    <div className="col">
                        <div className="imgagePlaceholder"></div>
                    </div>
                </div>
                <div className="splitCol splitCol_MarginTop">
                    <div className="col">
                        <h3>Mock ups</h3>
                        <p>Once the layout of the content was agreed on, I started mocking up some pages based on the design system I created for DISCO. Using the design system, I was quickly able to layout the content for the toolkit. Allowing us to get feedback from the sales team and other key stakeholders to help iterate on the design.</p>
                    </div>
                    <div className="col">
                        <div className="imgagePlaceholder"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="sectionWrapper">
            <div className="section">
                <h2>The final outcome</h2>
                <p>I am super proud of the toolkit and believe it fills a much needed gap. Looking back I think I would start getting feedback from both team sooner to help align myself on features that are must have's instead of building features that were just nice to have.</p>                
                <div className="wallGrid">
                    <div className="imgagePlaceholder small"></div>
                    <div className="imgagePlaceholder small"></div>
                    <div className="imgagePlaceholder small"></div>
                    <div className="imgagePlaceholder small"></div>
                    <div className="imgagePlaceholder small"></div>
                    <div className="imgagePlaceholder small"></div>
                </div>
            </div>
        </div>

        <ContactSection />
        
    </div>
)

export default SalesToolkit
