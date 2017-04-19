import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';


const installRNM = `$ npm install react-native-maps --save`;

const importMap = `// App.js
import MapView from 'react-native-maps';`;


const createMap = `// App.js
class Map extends React.Component {
  render() {
    return (
      <View>Hi, I'm going to be a map!</View>
    );
  }
}

// ...

// Render your Map component into our main component, likely App at this point in workshop
export default class App extends React.Component {
  render() {
    return (<Map />);
  }
}
`;


const addStyle = `// App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>Hi, I'm going to be a map!</View>
    );
  }
}
// ...
`;

const addMapView = `// App.js
class Map extends React.Component {
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        / >
    </View>
    );
  }
}
`;

const importMarker = `// App.js
import MapView, { Marker } from 'react-native-maps';`;

const markerStyle = `// App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
// ...
`;



const addState = `// App.js
class Map extends React.Component {
  constructor(props) { // heyo!
    super(props);
    this.state = {
      markers: [] // we will put markers into this Array
    }
  }
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
        </MapView>
    </View>
    );
  }
}
`;


const addMarkerMap = `// App.js
class Map extends React.Component {
  constructor(props) { // heyo!
    super(props);
    this.state = {
      markers: [] // heyo! we will put markers into this Array
    }
  }
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          // heyo!
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.label}</Text>
                </View>
              </Marker>
            )
          }) : null}
          // end heyo!
        </MapView>
    </View>
    );
  }
}
`;


const addMakrerHandler = `// App.js
class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) { // heyo!
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          label: 'beer'
        }
      ]
    })
  }
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={this.handlePress} // heyo!
          >
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.label}</Text>
                </View>
              </Marker>
            )
          }) : null}
        </MapView>
    </View>
    );
  }
}
`;




class AirbnbMapView extends Component {
  render() {

    return(
      <div className="general">
        <h1>13. Airbnb MapView</h1>
        <p>Let{`'`}s get started with Maps!  We are going to be using the `react-native-maps` by Airbnb.  This will allow us to create a Map View that will work on both IOS + Android.</p>
        <h2>Setup & Installation</h2>

        <p>Install the latest version of <a href="https://github.com/airbnb/react-native-maps">`react-native-maps`</a> from npm</p>
        <Highlight lang='bash' value={installRNM} />
        <p>Verify that you have successfully installed `react-native-maps` by peeking inside your package.json</p>
        <p>If using `create-react-native-app` with the latest versions of react native, node, npm, installation should be smooth as butter.  In next steps, if you encounter issues (due to installation), see official documentation.</p>
        <p>Official Docs and more details about installing: <a href="https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md">react-native-maps</a>.</p>

        <h2>Importing Component</h2>
        <p>For our app, we will start with displaying a basic Map.  Once we are able to render a basic Map, we can move onto wiring up more functionality.</p>


<ul className="setup__steps">
  <li>
    <p>Let{`'`}s start by importing our `MapView` component dependancy from `react-native-maps` component library.  Inside App.js at the top add the following.</p>
    <Highlight lang='javascript' value={importMap} />
  </li>

</ul>
<Note type="facts"><p><span>Note: </span> The import statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc.  You can learn more about modules <a href="https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/">here.</a>
</p></Note>


<h2>MapView</h2>
<p>Now that we have our map component imported, let{`'`}s configure it and render it to our screen.</p>
<ul className="setup__steps">
<li>
  <p>Create a new Component called `Maps` that we can put our `MapView` into.</p>
  <Highlight lang='javascript' value={createMap} />
  <p>Once you have created the component, make sure that it is rendering.</p>
</li>
<li>
  <p>Before we create our `MapView`, add a stylesheet.  You can also modify an existing one if you want!</p>
  <Highlight lang='javascript' value={addStyle} />

  <Note type="facts"><p><span>Note: </span>
  It is important to note that we have a styles.container which is flex one which means that the map view will take up the entire screen.
  </p></Note>


</li>
<li>
  <p>Now let us configure our `MapView` and get it rendering with some default coordinates.  The initial region is latitude, longitude and then delta which will then determine how far out the map is zoomed.</p>
  <Highlight lang='javascript' value={addMapView} />
</li>
<li>Sweet, you should now see a map!  Try pinch & zoom!  If you want, tinker with the options, compose another map, let things break, try it out, fix it, and have fun!</li>
</ul>


<h2>Markers</h2>
<p>Now that we have our map, we can make it more interesting by adding the ability to add markers.</p>
<ul className="setup__steps">
<li>
  <p>First, import the Marker component.</p>
  <Highlight lang='javascript' value={importMarker} />
  <Note type="facts"><p><span>Note: </span> We are importing the `Marker` component using the named export syntax (hence the curlys).  You can learn more about modules <a href="https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/">here.</a>
  </p></Note>
</li>
<li>
  <p>Update our stylesheet with marker and text styles.</p>
  <Highlight lang='javascript' value={markerStyle} />
</li>
<li>
  <p>Now we need a way to contain a set of markers.  We can use our component `state`.</p>
  <Highlight lang='javascript' value={addState} />
  <Note><p><span>Note:</span>  Learn more about React `state` in the official React Docs - <a href="https://facebook.github.io/react-native/docs/state.html">https://facebook.github.io/react-native/docs/state.html</a></p></Note>
</li>



<li>
  <p>Next, nested inside our `MapView` we can `iterate` over a set of markers with `this.state.markers` (we will populate it next step).</p>
  <Highlight lang='javascript' value={addMarkerMap} />
  <Note><p><span>What is happening:</span>  We use the JavaScript Array method `.map` on our this.state.markers Array, we pass it a function that takes in the argument of marker. We will then return the `Marker` component that was earlier imported, and spread our marker data onto the marker component.  This creates a list of nested marker components within our MapView.</p>
  </Note>
</li>

<li>
  <p>Now we can populate our this.state.markers Array and see markers render on the map.  To do this, we will add a handler to our MapView to capture and add a marker to our state when a user taps on the map. </p>
  <p>We first need to add our event handler `handlePress`, have it call this.setState to populate our Array.  Then we need pass the handler to our MapView component.</p>
  <Highlight lang='javascript' value={addMakrerHandler} />
</li>


<li>Bam!  You can now go nuts and tap on your map and see markers appear.</li>
</ul>



<h2>Reference Links</h2>
<ul>
  <li><a href="https://github.com/airbnb/react-native-maps">react-native-maps</a></li>
</ul>


      </div>
    );
  }
}

export default AirbnbMapView;
