import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* react project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Portfolio Web App
            </CardTitle>
            <CardText>
              You are currently on and navigating through my portfolio website
              that i built using React.js (JavaScript Library), React MDL
              (Components), React router DOM, bootstrapped with Create React
              App, JSX, CSS, HTML, Node.js, and NPM (Package Manager).
            </CardText>
            <div className="projects-github-links1">
              <CardActions border>
                {/* Projects - GitHub - Portfolio */}
                <a
                  href="https://github.com/JohnnyTran007/portfolio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </CardActions>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* React project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Iot Web App
            </CardTitle>
            <CardText>
              IoT motion detector from a raspberry Pi sending data via MQTT
              protocol to Amazon's IoT platform to send and retrieve JSON
              objects, the data was then stored in an S3 database bucket and
              retrieved and displayed to our React web app.
            </CardText>
            <CardActions border>
              <div className="projects-github-links2">
                {/* Projects - GitHub - IoT */}
                <a
                  href="https://github.com/JohnnyTran007/Iot-Motion-Sensor"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          ;
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is my IoT Project</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is my Networks & Security Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is my Functional Programming Projects</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React Portfolio Website</Tab>
          <Tab>Internet of Things (IoT)</Tab>
          <Tab>Network & Security</Tab>
          <Tab>Functional Programming</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
