import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class Recap extends Component {
  render() {
    return(
      <div>
        <h1>9. Recap</h1>
        <p>Congrats on workshop 1.  If you have gotten this far that is great.  If not, that is okay too.  Now is the time to get started, tidy up everything from workshop 1, ask questions, and make sure everything is working.</p>
        <p>In order to advance, it is important to grasp (atleast slightly) and complete workshop 1; Do not worry if you are behind everyone here is learning and we can help!</p>
        <h2>Do this now!</h2>
        <ul className="setup__steps">
          <li>Ask questions to presenter and to your team (other people at your table).</li>
          <li>If you are still needing to setup and config your dev environment go to <a href='#/setup'>step 2</a></li>
          <li>Let{`'`}s get started, spending ~ 15 mins or so on #1, #2 before diving into the next sections.</li>
        </ul>

        <h2>Helpful links</h2>
        <ul>
          <li><a href="https://facebook.github.io/react-native/releases/next/docs/getting-started.html">React Native Component Docs</a></li>
          <li><a href="https://facebook.github.io/react/docs/hello-world.html">React Docs</a></li>
          <li><a href="https://docs.expo.io/versions/v15.0.0/index.html">Expo Docs</a></li>
        </ul>


        <Note type="facts"><p>Workshop 1 code.  <a href="https://github.com/gufsky/react-native-workshop-1">https://github.com/gufsky/react-native-workshop-1</a>.
        </p></Note>
      </div>
    );
  }
}

export default Recap;
