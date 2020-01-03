import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Coursework extends Component {
  render() {
    return (
      <Grid>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.courseName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Coursework;
