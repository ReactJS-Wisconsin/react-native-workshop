import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

const connect = `export default connect(state => {
  return {
    results: state.search.results
  }
})(Map)
`

const render = `render () {
  return (
    <View style={styles.container}>
      <BackBar navigate={this.goHome} />

      <MapView
        style={styles.container}
        initialRegion={{
          latitude: mockdata.origin.latitude,
          longitude: mockdata.origin.longitude,
          latitudeDelta: mockdata.origin.latitudeDelta,
          longitudeDelta: mockdata.origin.longitudeDelta
        }}
      >

        {this.props.results.map((result, i) => {
          // create markers & pass setSelectedVenue function
          return (
            <Marker coordinate={result.coordinate} key={i} onPress={() => this.setSelectedVenue(result)}>
              {this.state.selectedVenue && this.state.selectedVenue.name === result.name ? <View style={styles.markerSelected} /> : <View style={styles.marker} /> }
            </Marker>
          )
        })}

      </MapView>

      { /* check if there's any markers to display, if so generate list of results */}
      { this.props.results.length > 0 && !this.state.selectedVenue &&
        <View style={styles.container}>
          <ResultsList
            setSelectedVenue={this.setSelectedVenue}
            results={this.props.results} />
        </View>
      }

      { /* check details for a specific venue if it has been selected */ }
      { this.state.selectedVenue &&
        <View style={styles.container}>
          <VenueDetails
            venue={this.state.selectedVenue}
            closeDetails={this.closeDetails} />
        </View>
      }

    </View>
  )
}`

const styles = `const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 7,
    borderRadius: 7
  },
  markerSelected: {
    backgroundColor: GREEN,
    padding: 7,
    borderRadius: 7
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  searchContainer: {
    height: 40,
    backgroundColor: '#fff'
  }
})`

const ResultsList = `import React, { Component } from 'react'
import { ListView } from 'react-native'
import ListItem from './ListItem'

class ResultsList extends Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.results)
    }
  }

  renderRow (rowData) {
    return (
      <ListItem
        setSelectedVenue={this.props.setSelectedVenue}
        rowData={rowData} />
    )
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)} />
    )
  }
}

export default ResultsList

`

const VenueDetails = `import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView, Dimensions } from 'react-native'
import venueImage from './../assets/images/venue-image.png'
import * as colors from '../styles/colors'

export default ({ venue, closeDetails }) => (
  <ScrollView style={styles.mainContainer}>
    <Button
      title='Close'
      onPress={closeDetails}
      color={colors.PRIMARY_PURPLE} />

    <View style={styles.headingContainer}>
      <View style={styles.headingRow}>
        <View>
          <Image source={require('./../assets/images/Beer.png')} style={styles.iconImage} />
        </View>

        <View style={styles.headerMain}>
          <Text>{venue.name}</Text>
          <Text style={styles.venueAddress}>{venue.address}</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.directionsBtn}>
            <Text style={styles.directionsText}>Directions</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.tagLine}>{venue.description}</Text>
      </View>
    </View>

    <Image source={{uri: venue.image}} style={{ height: 250, width: Dimensions.get('screen').width }} />
  </ScrollView>
)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.WHITE
  },
  headingContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 25
  },
  headingRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  headerMain: {
    flex: 1
  },
  iconImage: {
    height: 50,
    width: 40,
    marginRight: 15
  },
  venueAddress: {
    fontSize: 12,
    marginBottom: 5,
    color: '#777'
  },
  directionsBtn: {
    backgroundColor: colors.GREEN,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignSelf: 'center' // otherwise, 100% width
  },
  directionsText: {
    color: colors.WHITE
  },
  tagLine: {
    color: '#666',
    fontSize: 12
  }
})

`

class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. Map Component</h1>
        
        <ul className="setup__steps">
          <li>
            <p>Start by connecting the Map component to the search results</p>
            <Highlight lang='javascript' value={connect} />
          </li>
          <li>
            <p>Now that we have the component connected we can update the render function with the map markers and results by using this.props.results</p>
            <Highlight lang='javascript' value={render} />
          </li>
          <li>
            <p>Add the supporting styles for the selected marker. make sure to add the import statement import '{' GREEN '}' from './../styles/colors</p>
            <Highlight lang='javascript' value={styles} />
          </li>
          <li>
            <p>Now we can update the ResultsList and the VenueDetails components to consume the new data</p>
            <p>ResultsList</p>
            <Highlight lang='javascript' value={ResultsList} />
            <p>Venue Details</p>
            <Highlight lang='javascript' value={VenueDetails} />
          </li>
          <li>
            <p>That's it! You should now be able to search for bars by name, see the results list, and view venue details. As the app state changes we see the connected areas updated instantly! Congrats on making an awesome app!</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default SearchUiView
