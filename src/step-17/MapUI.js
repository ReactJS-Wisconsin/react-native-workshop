import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

import mapScreenshot from './map-screenshot.png'
import mockMarkers from './mock-markers.png'
import listScreen from './list-screen.png'

const imports = `import mockdata from '../mock/mockdata.json'`

const componentMockData = `  componentWillMount() {
    this.setState({ markers: mockdata.results })
  }`

const baseComponent = `import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import mockdata from '../mock/mockdata.json'

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }
  }

  componentWillMount () {
    this.setState({ markers: mockdata.results })
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: 45.5209087,
            longitude: -122.6705107,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i} onPress={() => this.setSelectedVenue(venue)>
                <View style={styles.marker} />
              </Marker>
            )
          }) : null }
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})
`

const mapViewMockData = `<MapView
          style={styles.container}
          initialRegion={{
            latitude: mockdata.origin.latitude,
            longitude: mockdata.origin.longitude,
            latitudeDelta: mockdata.origin.latitudeDelta,
            longitudeDelta: mockdata.origin.longitudeDelta
          }}
        >
          { /*
            Our mock data is already being passed to each Marker
            component with {...marker}, which will provide our
            markers with the geolocation data they need to
            render correctly on our map
          */}
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker} />
              </Marker>
            )
          }) : null }
      </MapView>`

const mapMarkerMockData = `{this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.label}</Text>
                </View>
              </Marker>
            )
          }) : null }`

const markersFinished = `export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }
  }

  componentWillMount() {
    this.setState({ markers: mockdata.results })
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: mockdata.origin.latitude,
            longitude: mockdata.origin.longitude,
            latitudeDelta: mockdata.origin.latitudeDelta,
            longitudeDelta: mockdata.origin.longitudeDelta
          }}
        >
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker} />
              </Marker>
            )
          }) : null }
        </MapView>
      </View>
    )
  }
}`

const resultsList = `import React, { Component } from 'react';
import { ListView } from 'react-native';
// The ListItem component doesn't exist yet, we'll make that next
import ListItem from './ListItem';

class ResultsList extends Component {
  constructor (props) {
    super(props);

    // We pass our mock data to this component from the Map component
    // we then pass this.props.results to the object created from ListView.DataSource
    // to determine if a row should be rendered or not
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.results)
    };
  }

  renderRow (rowData) {
    return (
      <ListItem
        setSelectedVenue={this.props.setSelectedVenue}
        rowData={rowData} />
    );
  }

  // ListView takes a renderRow prop, this takes a function to render an individual row
  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)} />
    );
  }
}

export default ResultsList;`

const listItemComponent = `import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

import * as colors from '../styles/colors';

export default ({ rowData, setSelectedVenue }) => {
  // get the properties we want from our mock data
  const { name, address, trendingNumber, travelTime } = rowData;
  return (
    <TouchableOpacity onPress={() => setSelectedVenue(rowData)}>
      <View style={styles.listItemContainer}>
        { /* for now we'll just use a static image, we can make this dynamic when we hook up the app to an API in the next workshop */ }
        <Image source={require('./../assets/images/Beer.png')} style={styles.iconImage} />
        { /* below we're just rendering the mock data */ }
        <View style={styles.mainContent}>
          <Text>{name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.trending}>+{trendingNumber} others trending now</Text>
        </View>
        <View style={styles.travel}>
          <Text style={styles.travelText}>{travelTime}</Text>
          <Image source={require('./../assets/images/glass-outline.png')} style={styles.smallIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};`

const listItemStyles = `const styles = StyleSheet.create({
  listItemContainer: {
    padding: 25,
    borderColor: '#777',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: colors.WHITE
  },
  iconImage: {
    height: 55,
    width: 45,
    marginRight: 15
  },
  address: {
    fontSize: 12,
    marginBottom: 5,
    color: '#777'
  },
  trending: {
    fontSize: 12,
    color: '#777'
  },
  smallIcon: {
    width: 17,
    height: 27,
    marginTop: 3
  },
  mainContent: {
    flex: 1 // by setting flex to 1, this column will stretch to fill any extra space
  },
  travel: {
    alignItems: 'flex-end'
  },
  travelText: {
    color: colors.PRIMARY_PURPLE
  }
});`

const resultsListImport = `import ResultsList from './ResultsList'`

const mapComponentResultsList = `export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }

    this.setSelectedVenue = this.setSelectedVenue.bind(this)
  }

  componentWillMount() {
    this.setState({ markers: mockdata.results })
  }

  // function to select a venue, pass to map markers and ResultsList
  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: mockdata.origin.latitude,
            longitude: mockdata.origin.longitude,
            latitudeDelta: mockdata.origin.latitudeDelta,
            longitudeDelta: mockdata.origin.longitudeDelta
          }}
        >
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i} onPress={() => this.setSelectedVenue(venue)}>
                <View style={styles.marker} />
              </Marker>
            )
          }) : null }
        </MapView>

        { /* check if there's any markers to display, if so generate list of results */}
        { this.state.markers.length > 0 && !this.state.selectedVenue &&
          <View style={styles.container}>
            <ResultsList
              setSelectedVenue={this.setSelectedVenue}
              results={this.state.markers} />
          </View>
        }
      </View>
    )
  }
}`

class MapUiView extends Component {
  render () {
    return (
    <div className="general">
      <h1>17. Map</h1>
      <p>Now it’s time to display our search results. First, we’ll edit our Map component from the last workshop to display the results as map markers. Then, we can add another component to display the results in a list alongside the map.</p>
      <h2>The Screen</h2>
      <img src={mapScreenshot} alt="map component final state" style={{height: '30rem'}} />
      <p>This is what we’ll be building. When it’s done we’ll have our mock data wired up with our styled components.</p>
      <h2>Map Markers</h2>
        <ul className="setup__steps">
          <li>
            <p>Let's add our mock data to the rest of our imports at the top of the 'Map.js' file</p>
            <Highlight lang='javascript' value={imports} />
          </li>
          <li>
            <p>Add the mock data to our component level state, in the Map component. This will allow us to access the mock data from inside the component so we can populate our map and list with it.</p>
            <Highlight lang='javascript' value={componentMockData} />
          </li>
          <li>
            <p>Delete the old 'handlePress' function from the Map component. Also delete the referenes to it in the class constructor and the MapView prop. We'll be replacing this later with a function that selects a venue when a marker is pressed. Our 'Map.js' file should now look like this:</p>
            <Highlight lang='javascript' value={baseComponent} />
          </li>
          <li>
            <p>Modify the MapView to use our mock data. This will focus the map on a particular location</p>
            <Highlight lang='javascript' value={mapViewMockData} />
          </li>
          <li>
            <p>Our map now centers on the correct location and the map markers are automatically added to the map. The Map component should render like this:</p>
            <img src={mockMarkers} alt="map populated from data" style={{height: '30rem'}} />
          </li>
        </ul>
      <h2>Results List</h2>
        <p>Now that our map and markers are working with our mock data, let's build a List component to give our users another way to view their search results. This is what we'll be building:</p>
        <img src={listScreen} alt="list results view" style={{height: '15rem'}} />
        <ul className="setup__steps">
          <li>
            <p>Create a new file in the components folder, called 'ResultsList.js'</p>
            <Highlight lang='javascript' value={resultsList} />
            <Note><p><span>Note:</span>The ListView component efficiently displays lists of changing data by only creating list items that will be displayed on the screen - thus saving memory. <a href="https://facebook.github.io/react-native/docs/listview.html">https://facebook.github.io/react-native/docs/listview.html</a></p></Note>
          </li>
          <li>
            <p>Create a new file in the component folder for our list items, 'ListItem.js'</p>
            <Highlight lang='javascript' value={listItemComponent} />
          </li>
          <li>
            <p>Now let's add the styles for the List Item. We'll use flexbox to dynamically size the width of each row, this way it will stretch to fill the screen regardless of device size. The rest of the styles set the colors, padding, image sizes, etc.</p>
            <Highlight lang='javascript' value={listItemStyles} />
          </li>
          <li>
            <p>Import 'ResultsList.js' into 'Map.js'</p>
            <Highlight lang='javascript' value={resultsListImport} />
          </li>
          <li>
            <p>Add our setSelectedVenue function, bind it in our constructor, and pass it to both the results list and the map markers</p>
            <Highlight lang='javascript' value={mapComponentResultsList} />
          </li>
        </ul>
    </div>
    )
  }
}

export default MapUiView
