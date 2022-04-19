import React from "react";

import sha256 from "js-sha256";

export default class FetchGreeting extends React.Component {
  state = {
    loading: true,
    firstName: null,
    lastName: null,
  };

  async componentDidMount() {
    const param = [`email=${this.props.email}`, `password=${sha256(this.props.password)}`].join("&");
    const url = `/human/name?${param}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      firstName: data.firstName,
      lastName: data.lastName,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Hallo Gast !</h1>;
    }

    if (!this.state.firstName || !this.state.lastName) {
      return <h1>Uuuuups, da ist etwas schiefgegangen :(</h1>;
    }

    return (
      <div>
        <h1>
          Hallo {this.state.firstName} {this.state.lastName} !
        </h1>
      </div>
    );
  }
}
