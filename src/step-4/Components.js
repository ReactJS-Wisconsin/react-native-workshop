import React, {Component} from 'react';
import Note from '../Note';
import Highlight from 'react-syntax-highlight';

class Components extends Component {
  render() {
    const firstComponent =`// App.js
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    // ..
    class Screen extends React.Component {
      render() {
        return (
          <Text>
            Hello Components!
          </Text>
        );
      }
    }`;

    const renderComponent =`// App.js
    // ..



    `;

    return(
      <div className="general">
        <h1>4. Components</h1>
        <p>Components are the fundamental building blocks in React.  They allow us to organize our UI and break logical units of functionality into pieces.</p>
        [div, span diagram]


        <h2>Composing Components</h2>
        <p>Let{`'`}s create our first component and render a `react-native` components `View`.</p>
        <ul className="setup__steps">
        <li>
          <p>Inside App.js create a new `Screen component` that renders a `View` component.</p>
          <Highlight lang='javascript' value={firstComponent} />
        </li>
        <li>
          <p>Now that we created a new component, you may notice that it is not rendering to our screen.  We need to compose our new component inside our main `App` component.</p>
          <Highlight lang='javascript' value={renderComponent} />
        </li>
        <li>Sweet, we are done.  Try navigating on your phone!</li>
        </ul>
      </div>
    );
  }
}

export default Components;
