import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class Routing extends Component {
  render() {
    const installRN = `$ npm install --save react-navigation`;

const firstScreen = `// App.js
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Welcome Home!</Text>;
  }
}`;

const secondScreen = `// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// ...

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
});
`;


const thirdScreen = `// App.js
// ...

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
`;

const fourthScreen = `// App.js
// ...
class ArticlesScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };
  render() {
    return (
      <View>
        <Text>Articles</Text>
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Articles: { screen: ArticlesScreen },
});

`;

const fifthScreen = `// App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
// ..
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome Home!</Text>
        <Button
          onPress={() => navigate('Articles', { articles: [1, 2, 3] })}
          title="Articles"
        />
      </View>
    );
  }
}`;

    return(
      <div className="general">
        <h1>5. Routing</h1>
        <p>Let{`'`}s use React Navigation to create basic routing & navigation for our app.</p>
        <h2>Setup & Installation</h2>

        <p>Install the latest version of react-navigation from npm</p>
        <Highlight lang='bash' value={installRN} />
        <p>Verify that you have successfully installed `react-navigation` by peeking inside your package.json</p>
        <p>More details about <a href="https://github.com/react-community/react-navigation">react-navigation</a>.</p>

        <h2>Stack Navigator</h2>
        <p>
For our app, we want to use the `StackNavigator` because we want a conceptual 'stack' navigation, where each new screen is put on the top of the stack and going back removes a screen from the top of the stack.
        </p>


<ul className="setup__steps">
  <li>
    <p>Let{`'`}s start with one screen.  Inside App.js create a new `HomeScreen component`</p>
    <Highlight lang='javascript' value={firstScreen} />
  </li>
  <li>
    <p>Now we will Import `StackNavigator` from `react-navigation` and create our routing configuration called `Routes`.</p>
    <Highlight lang='javascript' value={secondScreen} />
  </li>
  <li>
    <p>Once we have our `Routes` config, we can now render our first route!  Replace the contents of our default `App` component with our `Routes` config (component).</p>
    <Highlight lang='javascript' value={thirdScreen} />
  </li>
</ul>
<Note type="facts"><p><span>Note: </span> The `title` of the screen is configurable on the static `navigationOptions`, where many options can be set to configure the presentation of the screen in the navigator.  See docs.
</p></Note>


<h2>Adding Routes</h2>
<p>Now that we have our first route working, let us add another screen and a button to navigate to it.</p>
<ul className="setup__steps">
<li>
  <p>Inside App.js create a new `ArticlesScreen component` and register it with our `StackNavigator`</p>
  <Highlight lang='javascript' value={fourthScreen} />
</li>
<li>
  <p>Finally, add a button to navigate to our new screen.  Make sure you import `Button` from `react-native`.  Our button in `HomeScreen` component links to `ArticlesScreen` using the `routeName` `Articles`.</p>
  <Highlight lang='javascript' value={fifthScreen} />
</li>
<li>Sweet, we are done.  Try navigating on your phone!</li>
</ul>

<h2>Reference Links</h2>
<ul>
  <li><a href="https://github.com/react-community/react-navigation">react-navigation</a></li>
</ul>


      </div>
    );
  }
}

export default Routing;
