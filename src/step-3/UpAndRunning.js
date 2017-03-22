import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div className="general">
        <h1>1. Introduction</h1>
        <p>In this workshop, you will be learning about React Native, how it works, and how to build your first React Native App.</p>
        <h2>What is React Native?</h2>
        <p>[placeholder]</p>
        <h2>Things you need</h2>
        <ul className="check-list">
          <li><b>Laptop</b> - Mac OS or Windows.</li>
          <li><b>Mobile Device</b> - IOS or Android.</li>
        </ul>

        <h2>[placeholder]</h2>
        <ul>
          <li>[placeholder]</li>
          <li>[placeholder]</li>
        </ul>

        <Note type="facts">
          <p><span>Facts: </span> [placeholder]</p>
        </Note>
      </div>
    );
  }
}

export default Introduction;
