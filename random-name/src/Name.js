//display the name

import React, { Component } from "react";
import Randomizer from "./Randomizer";

class Name extends Component {

    render(){
        return (
          <div className="Name">
            <h1>Randomly Chosen Name: </h1>
            <span>{this.props.randomName}</span>
          </div>
        );
    }
}

export default Name;