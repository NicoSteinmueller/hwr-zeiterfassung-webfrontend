import React from "react";
import User from "../pages/User";

const emailParam = "test";
const passwordParam =
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

const user = [`email=${emailParam}`, `password=${passwordParam}`].join("&");

const url = `/login/basicLogin?${user}`;

export default class FetchGreeting extends React.Component {
//   state = {
//     loading: true,
//     isAuthenticated: false,
//     data: null
//   };

  async componentDidMount() {
   await fetch(url, {
        method: "POST",

    }).then(response => {
        if (response.ok) {
            <User />
            // redirect: 
        } else {
            throw new Error('Bad choice!')
        }
    });
  }
}
