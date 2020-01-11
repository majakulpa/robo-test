import React, {Component} from 'react';
import CardDesc from './CardDesc'
import './Card.css'

class Card extends Component {
    constructor() {
        super()
        this.state = {
            pictures: []
        }
    }

    componentDidMount() {
        fetch('https://www.randomuser.me/api/?results=500')
        .then(results => {
          return results.json();
        }).then(data => {
          let pictures = data.results.map((pic) => {
            return(
              <div key={pic.results}>
                <div>
                    <img src={pic.picture.large} alt='avatar' />
                    <CardDesc/>
                </div>
              </div>
            )
          })
          this.setState({pictures: pictures});
          //console.log("state", this.state.pictures);
        })
      }

      render() {
        return (
            <div>
                <h1>My Friends</h1>
                <div className="background">{this.state.pictures}</div>
            </div>
        )
      }

  
}

export default Card