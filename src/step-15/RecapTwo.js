import React, { Component } from 'react';
import Note from '../Note';

class Recap extends Component {
  render() {
    return (
      <div>
        <h1>15. Recap From Workshop 2</h1>
        <p>Congrats on completing workshop 2! So far we have setup our project with Exponent, created the key map component, and added a routing mechanism. In this workshop, we will finish building out the user interface with many new components,
          styles, and supporting routes. At the end, we should have a fully functioning app ready to accept data from our APIs which will get wired up in the final workshop of the series.
        </p>

        <h2>Do this now!</h2>
        <ul className="setup__steps">
          <li>Ask questions to presenter and to your team (other people at your table).</li>
          <li>If you are still needing to setup, download a zip of the project we will be starting with <a href='https://github.com/ajzozakiewicz/react-native-workshop-3-solution' target='_blank'>here</a>.</li>
          <li>If you are attempting to run the project using the Genymotion emulator. Be sure to install play services in order for maps to work.
               <a href='https://guides.codepath.com/android/Genymotion-2.0-Emulators-with-Google-Play-support#setup-google-play-services' target='_blank'>Instructions</a>
          </li>
        </ul>

        <h2>Helpful links</h2>
        <ul>
          <li><a href="https://facebook.github.io/react-native/releases/next/docs/getting-started.html">React Native Component Docs</a></li>
          <li><a href="https://facebook.github.io/react-native/docs/flexbox.html">Layout with Flexbox</a></li>
          <li><a href="https://docs.expo.io/versions/v15.0.0/index.html">Expo Docs</a></li>
        </ul>

        <Note type="facts"><p>Starting code for workshop 3.  <a href="https://github.com/ajzozakiewicz/react-native-workshop-3-solution"
          target='_blank'>https://github.com/ajzozakiewicz/react-native-workshop-3-solution</a>.
        </p></Note>
      </div>
    );
  }
}

export default Recap;
