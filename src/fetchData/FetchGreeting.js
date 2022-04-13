import React from "react";

const emailParam = "test";
const passwordParam =
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

const user = [`email=${emailParam}`, `password=${passwordParam}`].join("&");

const url = `/human/name?${user}`;

export default class FetchGreeting extends React.Component {
  state = {
    loading: true,
    firstName: null,
    lastName: null,
  };

  async componentDidMount() {
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
