import React, {Component} from 'react';

class CardDesc extends Component {
    constructor() {
        super()
        this.state = {
            names: []
        }
    }

    componentDidMount() {
        fetch('https://www.randomuser.me/api/?results=500')
        .then(results => {
          return results.json();
        }).then(data => {
          let names = data.results.map((person) => {
            return(
              <div key={person.results}>
                    <p>{person.name.first}</p>
              </div>
            )
          })
          this.setState({names: names});
          //console.log("state", this.state.pictures);
        })
      }

      render() {
        return (
                <div>{this.state.names}</div>
        )
      }

  
}

export default CardDesc