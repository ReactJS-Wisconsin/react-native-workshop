import React, {Component} from 'react';
import Note from '../Note';
import Highlight from 'react-syntax-highlight';

class Components extends Component {
  render() {
const firstComponent =`// App.js
// ..
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyComponent extends React.Component {
  render() {
    return (
      <Text>
        PBR Me ASAP!
      </Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

`;

const renderComponent =`// App.js
// ..

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent /> // heyo!
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
// ...

`;
const renderComponenttwo =`// App.js
// ..
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent />
        <MyComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`;
const renderProps =`// App.js
// ..

class MyComponent extends React.Component {
  render() {
    const { name } = this.props
    return (
      <Text>
        Hey {name}, PBR Me ASAP!
      </Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent name={'Jimbo'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`;
    return(
      <div className="general">
        <h1>4. Components</h1>
        <p>Components are the fundamental building blocks in React.  They allow us to organize our UI and break logical units of functionality into pieces.</p>
        <p>Browser DOM versus react-native library components</p>
        <table>
          <tr>
            <td>{`<div>`}</td><td>{`<View>`}</td>
          </tr>
          <tr>
            <td>{`<img>`}</td><td>{`<Image>`}</td>
          </tr>
          <tr>
            <td>{`<ul>`}</td><td>{`<ListView>`}</td>
          </tr>
        </table>


        <h2>Composing Components</h2>
        <p>Let{`'`}s create our first component and render a `react-native` components `View`.</p>
        <ul className="setup__steps">
        <li>
          <p>Inside App.js create a new `MyComponent` component that renders a react-native `View` component.</p>
          <Highlight lang='javascript' value={firstComponent} />
        </li>
        <li>
          <p>Now that we created a new component, you may notice that it is not rendering to our screen.  We need to compose our new component inside our main `App` component.  Append your component next to the existing `Text` components </p>
          <Highlight lang='javascript' value={renderComponent} />
        </li>
        <li>Sweet, check it out on your phone!  You should see your `MyComponent` component render.</li>
        <li>
          <p>Taking it a step further, we can delete the other stuff and render multiple instances of the same component.</p>
          <Highlight lang='javascript' value={renderComponenttwo} />
        </li>
        <li>
          <p>We can also pass properties to our components and render them.</p>
          <Highlight lang='javascript' value={renderProps} />
        </li>
        </ul>

<h2>Useful Links</h2>
<ul>
<li>
  <a href="https://facebook.github.io/react/tutorial/tutorial.html">https://facebook.github.io/react/tutorial/tutorial.html</a>
</li>
</ul>
      </div>
    );
  }
}

export default Components;
