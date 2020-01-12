import React, { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://www.randomuser.me/api/?results=500")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let users = data.results.map(pic => {
          return (
            <div>
              <div className="card" key={pic.results}>
                <img src={pic.picture.large} alt="avatar" />
                <h4>
                  {pic.name.first} {pic.name.last}
                </h4>
                <p>{pic.location.city}</p>
                <p>{pic.cell}</p>
                <p>{pic.email}</p>
              </div>
            </div>
          );
        });
        this.setState({ users: users });
        //console.log("state", this.state.pictures);
      });
  }

  onSearchChange = event => {
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredUsers = this.state.users.filter(users => {
      return users.name.first
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
      console.log(filteredUsers);
    });
    return (
      <div>
        <h1>My Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Card users={filteredUsers} />
      </div>
    );
  }
}

export default App;
