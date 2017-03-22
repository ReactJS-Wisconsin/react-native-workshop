import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div className="general">
        <h1>1. Introduction</h1>
        <p>In this workshop, you will be learning about React Native, how it works, and how to build your first React Native App.</p>
        <h2>What is React Native?</h2>
        <h2>Things you need</h2>
        <ul className="check-list">
          <li><b>Laptop</b> - Mac OS or Windows.</li>
          <li><b>Mobile Device</b> - IOS or Android.</li>
        </ul>

        <h2>Things you need</h2>
        <ul>
          <li><a href="https://www.google.com/chrome/browser/desktop/" target="_blank">Chrome Browser</a> 46 or above</li>
          <li>Text Editor</li>
        </ul>

        <Note type="facts">
          <p><span>Facts: </span> AirBnB uses React Native <a href="https://developers.google.com/web/showcase/2016/pdfs/flipkart.pdf" target="_blank">asdf</a></p>
        </Note>
      </div>
    );
  }
}

export default Introduction;
