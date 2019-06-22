import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop form from submiting
    event.preventDefault()
    // 2. get the text from that input
    console.log(this.myInput)
    //3. change the page to /store/whatever-they-entered
  }

  render() {
    return  (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store → </button>
      </form>
    )
  }
}

export default StorePicker;