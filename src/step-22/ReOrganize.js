import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

import searchShot from './search-screenshot.png'
import iconRowShot from './icon-row-shot.png'
import searchInputShot from './search-field-shot.png'

const imports = `import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native'`

const baseComponent = `class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  constructor(props){
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
       {/* Awesome Code Goes Here */}
      </View>
    )
  }
}
`

const IconRow = `render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.row}> 
          <Image source={require('./assets/images/Beer.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Wine.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Martini.png')} style={styles.mainIcon}/>

          <Text style={styles.welcome}>Begin Your Adventure</Text>
        </View>
      </View>
    )
  }
`

const IconRowStyles = `const STANDARD_VERT_SPACING = 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_PURPLE,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  mainIcon: {
    height: 80,
    width: 80
  },
  welcome: {
    color: colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: STANDARD_VERT_SPACING
  }
})
`

const searchWrapperCode = `render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('./assets/images/Beer.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Wine.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Martini.png')} style={styles.mainIcon}/>
        </View>

        <Text style={styles.welcome}>Begin Your Adventure</Text>
          
        <View style={{flexDirection: 'row'}}>
          {/* Super duper search coming in hot.  */}
        </View>
      </View>
    );
}`

const searchState = `constructor(props){
    super(props)
    this.state = {
      searchString: ''
    }
  }`

const textInput = `render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('./assets/images/Beer.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Wine.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Martini.png')} style={styles.mainIcon}/>
        </View>

        <Text style={styles.welcome}>Begin Your Adventure</Text>
          
        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchWrap}>
            <TextInput style={styles.search}
              underlineColorAndroid='transparent'
              placeholder="Search for beer, wine, or cocktail"
              placeholderTextColor="#f7f7f7"
              onChange={(text) => this.setState({ searchString: text})}
            />
          </View>

          {/* Button Column Goes Here.  */}
        </View>
      </View>
    );
  }
`

const ButtonCode = `clickHandler() {
  const { navigate } = this.props.navigation;
  return navigate('MapScreen', { searchString: this.state.searchString })
}

render() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('./assets/images/Beer.png')} style={styles.mainIcon}/>
        <Image source={require('./assets/images/Wine.png')} style={styles.mainIcon}/>
        <Image source={require('./assets/images/Martini.png')} style={styles.mainIcon}/>
      </View>

      <Text style={styles.welcome}>Begin Your Adventure</Text>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.searchWrap}>
          <TextInput style={styles.search}
            underlineColorAndroid='transparent'
            placeholder="Search for beer, wine, or cocktail"
            placeholderTextColor="#f7f7f7"
            onChange={(text) => this.setState({ searchString: text})}
          />
        </View>

        <TouchableOpacity
          onPress={this.clickHandler}
          style={{flex: 1, alignItems: 'center', padding: 5}}
        >
          <Image source={require('./assets/images/Search.png')} style={{ height: 30, width: 30, marginTop: -5}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}`


const routeCode = `const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen }
}, {
  headerMode: 'none'
});
`


const searchInputStyles = `searchWrap: {
  height: 30,
  flex: 5,
  backgroundColor: '#986FBF',
  borderWidth: .5,
  borderColor: colors.WHITE,
  borderRadius: 2,
  marginBottom: STANDARD_VERT_SPACING,
  padding: 5,
  paddingLeft: 10
},
search: {
  flex: 1, // needed for IOS text to center vertically
  fontSize: 14,
  color: colors.WHITE
},
instructions: {
  textAlign: 'center',
  color: colors.WHITE,
  marginBottom: 5
}`

const finished = `
import Expo from 'expo';
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import ArticlesScreen from './components/Articles'
import MapScreen from './components/Map'

import * as colors from './styles/colors'
import * as fonts from './styles/fonts'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  constructor(props){
    super(props)

    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      searchString: ''
    }
  }

  clickHandler() {
    const { navigate } = this.props.navigation;
    return navigate('MapScreen', { searchString: this.state.searchString })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('./assets/images/Beer.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Wine.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Martini.png')} style={styles.mainIcon}/>
        </View>

        <Text style={styles.welcome}>Begin Your Adventure</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchWrap}>
            <TextInput style={styles.search}
              underlineColorAndroid='transparent'
              placeholder="Search for beer, wine, or cocktail"
              placeholderTextColor="#f7f7f7"
              onChange={(text) => this.setState({ searchString: text})}
            />
          </View>

          <TouchableOpacity
            onPress={this.clickHandler}
            style={{flex: 1, alignItems: 'center', padding: 5}}
          >
            <Image source={require('./assets/images/Search.png')} style={{ height: 30, width: 30, marginTop: -5}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const STANDARD_VERT_SPACING = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_PURPLE,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  mainIcon: {
    height: 80,
    width: 80
  },
  searchWrap: {
    height: 30,
    flex: 5,
    backgroundColor: '#986FBF',
    borderWidth: .5,
    borderColor: colors.WHITE,
    borderRadius: 2,
    marginBottom: STANDARD_VERT_SPACING,
    padding: 5,
    paddingLeft: 10
  },
  search: {
    flex: 1, // needed for IOS text to center vertically
    fontSize: 14,
    color: colors.WHITE
  },
  welcome: {
    color: colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: STANDARD_VERT_SPACING
  },
  instructions: {
    textAlign: 'center',
    color: colors.WHITE,
    marginBottom: 5
  }
})

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen }
}, {
  headerMode: 'none'
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

Expo.registerRootComponent(App);
`




class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. Let's Reorganize!</h1>
        <p>In the next few steps we will be cleaning up some code from the last workshop, adding the components we need for our search screen, and adding the interactions and supporting routes for the map screen, and detail screen.</p>

        <h2>The Screen</h2>
        <p>This is what we are building! Let's get started!</p>

        <img src={searchShot} style={{height: '30rem'}} />

        <h2>Components</h2>

        <ul className="setup__steps">
          <li>
            <p>Lets start by importing the necessary components for our search screen in 'main.js'</p>
            <Highlight lang='javascript' value={imports} />
          </li>
          <li>
            <p>Next, delete all of the JSX markup within the root view of the HomeScreen component. We will be replacing this with some awesome code in a second. The HomeScreen component should now look like this: </p>
            <Highlight lang='javascript' value={baseComponent} />
          </li>
        </ul>

        <h2>Icon Row</h2>
        <img src={iconRowShot} style={{height: '10rem'}} />
        <p>Now that we have a barebones component to work with, let's add in the a View, three Image components, and the supporting Text Component.</p>
        <ul className="setup__steps">
          <li>
            <p>Add a container style to our root view, a view for the icon row, and three image components for our icons.</p>
            <Highlight lang='javascript' value={IconRow} />
          </li>
          <li>
            <p>Next, add the supporting styles to the stylesheet at the bottom of the page. We will apply background color and base styling to our container, flex direction to the icon row, sizing for the icons, and some text formatting for the title text.</p>
            <Highlight lang='javascript' value={IconRowStyles} />

            <Note type="facts">
              <p><span>Note: </span>
               React Native uses flexbox for creating layouts. For more information on this see: <a href='https://facebook.github.io/react-native/docs/flexbox.html' target='blank'>Layout with Flexbox</a>
              </p>
            </Note>
          </li>
          <li>
            Awesome, at this point we should have a nice background for our app and a cool icon row with title text. Next, we will add in the search input and supporting routes for the other views.
            <Note type="facts">
              <p><span>Tip: </span>
               As you build out your app, you will start to notice yourself duplicating styles in each of your components' StyleSheet objects. To help with this, create shared style sheets for colors, text formatting, and anything else resuable. Then just import them in your components.
              </p>
            </Note>
          </li>
        </ul>

        <h2>Search Input &amp; Additional Routes</h2>
        <img src={searchInputShot} style={{height: '5rem'}} />
        <p>Now that we have a our base home screen created let's add in the search input, handlers, and additional routes.</p>
        <ul className="setup__steps">
          <li>
            <p>First, let's add a property to our state to hold the string. We will need this in order to track changes
               on the input and send our search string to the map view</p>
            <Highlight lang='javascript' value={searchState} />
          </li>
          <li>
            <p>Now create a row to house our TextInput and Search Button.</p>
            <Highlight lang='javascript' value={searchWrapperCode} />
          </li>
          <li>
            <p>Our search row will contain two columns. One for the search input and one for the search button. The input requires a wrapper due to an Android quirk that prevents Android from honoring the height property on TextInput components. 
              More to come on that when we get to styles. Let's add the code now.</p>
            <Highlight lang='javascript' value={textInput} />
          </li>
          <li>
            <p>Next, we will add a TouchableOpacity with a search icon for our button. The onPress handler should call the Navigate method to send us to the
               MapScreen route and pass in the search string from our state.</p>
            <Highlight lang='javascript' value={ButtonCode} />
            <Note><p><span>Note:</span> If you need a button that contains only text, try the Button component.</p></Note>
          </li>
          
          <li>
            <p>Now we can add in the supporting style for our input and button.</p>
            <Highlight lang='javascript' value={searchInputStyles} />
          </li>

          <li>
            <p>Finally, add the new Route for the MapScreen to the StackNavigator.</p>
            <Highlight lang='javascript' value={routeCode} />
          </li>

          <li>That's it! We now have an awesome search screen for our bar finder app. Next, we will build out the map screen and detail screen. 
            The finished component should is below in case you need it.</li>
           <Highlight lang='javascript' value={finished} />
        </ul>

        <h2>Reference Links</h2>
        <ul>
          <li><a href="https://facebook.github.io/react-native/docs/textinput.html">TextInput</a></li>
          <li><a href="https://facebook.github.io/react-native/docs/image.html">Image</a></li>
          <li><a href="https://facebook.github.io/react-native/docs/touchableopacity.html">TouchableOpacity</a></li>
        </ul>

      </div>
    )
  }
}

export default SearchUiView
