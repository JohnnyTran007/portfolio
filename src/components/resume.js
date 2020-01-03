import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Coursework from "./coursework";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.ibb.co/9trMLG7/59888554310-AD61-C8-A1-37-E3-454-E-8958-0-A586244801-D.jpg"
                alt="avatar"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>John Tran</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h5>Address:</h5>
            <p>11160 Park Vista Dr</p>
            <p>Northglenn, CO 80234</p>
            <h5>Phone:</h5>
            <p>(303)-250-4007</p>
            <h5>E-mail:</h5>
            <p>johnnydattran@gmail.com</p>
            <h5>Website:</h5>
            <p>johntran.dev</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear="Fall 2014"
              endYear="Summer 2019"
              schoolName="Metropolitan State University of Denver"
              schoolDescription="Bachelors of Science in Computer Science with Mathematics minor"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Coursework</h2>
            <Coursework courseName="Web Application Architecture" />
            <Coursework courseName="Principles of Programming Languages" />
            <Coursework courseName="Operating Systems" />
            <Coursework courseName="Algorithms and Algorithm Analysis" />
            <Coursework courseName="Technical Software Project" />
            <Coursework courseName="Computer and Network Security" />
            <Coursework courseName="Computer Graphics" />
            <Coursework courseName="Databases" />
            <Coursework courseName="Software Development Methods and Tools" />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Technical Skills</h2>
            <Coursework courseName="JavaScript, HTML, CSS, Node.js, Django, React.js" />
            <Coursework courseName="Ruby on Rails, SQLite3, MongoDB, AWS" />
            <Coursework courseName="Docker, Git/GitHub, Trello/JIRA Agile Scrum development" />
            <Coursework courseName="C++, JAVA, Python, Scala, Scheme, ARM, Ruby, C#" />
            <Coursework courseName="Unix, Linux, Android, iOS, Raspbian" />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Projects</h2>
            <Coursework courseName="•	IoT PIR Motion detection – Using Django as framework, Node.js and React.js for front end development. Motion detected from hardware then sends data to AWS as JSON object files and storing to S3 bucket then retrieved and sent to web app where users log in to view data on their device." />
            <Coursework courseName="•	Academic Banner System – Using MVC model to create separation of concerns. Storing data using a relational database then migrating to MongoDB. HTML, CSS, JavaScript with Node.js." />
            <Coursework courseName="•	CW Master Teacher Web App - Using MVC model to create separation of concerns. Storing data using a relational database. Front end using HTML, JavaScript, and CSS." />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Employment History</h2>
            <Experience
              startYear="June 2019"
              endYear="Nov 2019"
              jobName="Production Administrator - Dents By Hand"
              jobDescription="Integrating production/office workflow with business management software"
            />
            <Experience
              startYear="Sept 2014"
              endYear="May 2019"
              jobName="Assistant Manager - North Federal Sunshine Center"
              jobDescription="Resolving customer needs, Manage inventory and accounting"
            />
            <Experience
              startYear="May 2008"
              endYear="May 2014"
              jobName="Lab Coordinator & Dispatcher - Schryver Medical and Marketing LLC"
              jobDescription="Produced requirements and maintained Citrix software, Trained new-hires with day to day responsibilities, organizing and improving workflow, Revising and updating policy and procedures, Working with quality assurance to investigate internal issues, working closely with managers in other departments to ensure communication and work gets done efficiently"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
