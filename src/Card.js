import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://www.randomuser.me/api/?results=500')
        .then(results => {
          return results.json();
        }).then(data => {
          let users = data.results.map((pic) => {
            return(
              <div key={pic.results}>
                <div className="card">
                    <img src={pic.picture.large} alt='avatar' />
                    <h4>{pic.name.first} {pic.name.last}</h4>
                    <p>{pic.location.city}</p>
                    <p>{pic.cell}</p>
                    <p>{pic.email}</p>
                </div>
              </div>
            )
          })
          this.setState({users: users});
          //console.log("state", this.state.pictures);
        })
      }

      render() {
        return (
            <div>
                <h1>My Friends</h1>
                <div className="background">{this.state.users}</div>
            </div>
        )
      }

  
}

export default Card