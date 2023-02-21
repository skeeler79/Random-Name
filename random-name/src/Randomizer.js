//selects the random name by clicking button. There would be one randomizer used for each class period

import React, { Component } from "react";
import Name from "./Name";

class Randomizer extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'Random Name'}
    }
  render() {


    return (
      <div className="Randomizer">
          <Name randomName={this.state.name}/>
        <button onClick={this.chooseName}>Choose Name</button>      
      </div>
    );
  }
}

export default Randomizer;