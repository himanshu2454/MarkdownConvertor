import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import Footer from "./footer";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Header />

        <Container className="body">{this.props.children}</Container>
      </div>
    );
  }
}
