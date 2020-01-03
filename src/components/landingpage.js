import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h2>John Tran</h2>
              <h1>Aspiring Full Stack Developer</h1>
              <hr />
              <p>
                Ready to work together on impactful idea's! or something useless
                just for fun! :o)
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/JohnnyTran007"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
