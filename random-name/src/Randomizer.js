//selects the random name by clicking button. There would be one randomizer used for each class period

import React, { Component } from "react";
import Name from "./Name";
import {mathAll} from "./data";

class Randomizer extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'John Doe'}
    }
  
  chooseName(){

  }
    render() {
        // const Names = () => {
        //     mathAll.map((data, key)=>{
        //         console.log (`${data.firstName} ${data.lastName}`)
                  
                
        //     });
        // }

    return (
      <div className="Randomizer">
          <Name randomName={this.state.name}/>
        <button onClick={this.chooseName}>Choose Name</button>      
      </div>
    );
  }
}

export default Randomizer;