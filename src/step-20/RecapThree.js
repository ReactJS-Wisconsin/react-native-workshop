import React, { Component } from 'react';
import Note from '../Note';

class Recap extends Component {
  render() {
    return (
      <div>
        <h1>20. Recap From Workshop 3</h1>
        <p>Congrats on completing workshop 3! We are now ready to add supporting apis and app state to our bar finder app.</p>

        <h2>Do this now!</h2>
        <ul className="setup__steps">
          <li>Ask questions to presenter and to your team (other people at your table).</li>
          <li>If you are still needing to setup, download a zip of the project we will be starting with <a href='https://github.com/ajzozakiewicz/react-native-workshop-3-solution' target='_blank'>here</a>.</li>
        </ul>

        <h2>Helpful links</h2>
        <ul>

          <li><a href="http://redux.js.org/">Redux Documentation</a></li>
          <li><a href="https://egghead.io/courses/getting-started-with-redux">Egghead IO - Getting Started with Redux</a></li>
        </ul>

        <Note type="facts"><p>Starting code for workshop 4.  <a href="https://github.com/ajzozakiewicz/react-native-workshop-3-solution"
          target='_blank'>https://github.com/ajzozakiewicz/react-native-workshop-3-solution</a>.
        </p></Note>
      </div>
    );
  }
}

export default Recap;
