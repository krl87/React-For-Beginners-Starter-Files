import React from "react";
import AddFishForm from './AddFishForm.js'

class Inventory extends React.Component {
  render() {
    return(
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addfish={this.props.addfish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;