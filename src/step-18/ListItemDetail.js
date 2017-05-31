import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

import detailShot from './detail-shot.png'
import fileTree from './file-tree.png'

const baseComponent = `import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native'
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
        <Text style={styles.tagLine}>{venue.tagLine}</Text>
      </View>
    </View>

    <Image source={venueImage} />
  </ScrollView>
)`

const baseStyles = `const styles = StyleSheet.create({
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
const closeDetails = `// clear out selected venue, return to results list
closeDetails() {
  this.setState({
    selectedVenue: null
  })
}
`

const mainLogic = `{ /* check if there's any markers to display, if so generate list of results */}
{ this.state.markers.length > 0 && !this.state.selectedVenue &&
  <View style={styles.container}>
    <ResultsList
      setSelectedVenue={this.setSelectedVenue}
      results={this.state.markers} />
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
`

const venueImport = `import VenueDetails from './VenueDetails'`

const backBar = `import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import venueImage from './../assets/images/back-arrow.png'
import * as colors from '../styles/colors'

export default ({ navigate }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={navigate}>
      <Image source={venueImage} style={styles.backbtn} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_PURPLE,
    flexDirection: 'row',
    height: 60,
    paddingTop: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999
  },
  backbtn: {
    height: 30,
    width: 30
  }
})
`
const navactions = `import {NavigationActions} from 'react-navigation'
import BackBar from './BackBar'

const backAction = NavigationActions.back();`
const goHome = `goHome() {
  this.closeDetails()
  this.props.navigation.dispatch(backAction)
}`
const goHomeJsx = `<BackBar navigate={ this.goHome } />`

class ListItemDetail extends Component {
  render () {
    return (
      <div className="general">
        <h1>16. Map Item Detail</h1>
        <p>Now that we have a map view showing all of the options, let's add the ability to select a map item and show the details for that location.</p>
        <img src={detailShot} style={{ height: '30rem' }} />

        <h2>The Component</h2>
        <ul className="setup__steps">
          <li>
            <p>First, add a file called `VenueDetails.js` to your project.</p>
            <img src={fileTree} style={{ height: '10rem' }} />
          </li>
          <li>
            <p>Now, add the component code below. Nothing new here with this component other than taking `venue` and `closeDetails` as arguments. `venue` will be an object of the selected list item.
               `closeDetails` is the method we need to call to close the detail view and go back to the ListView.</p>
            <Highlight lang='javascript' value={baseComponent} />
          </li>
          <li>
            <p>Next, create a StyleSheet and add the supporting styles for our component.</p>
            <Highlight lang='javascript' value={baseStyles} />
          </li>
        </ul>

        <h2>Iteraction Logic</h2>
        <p>Now that we have our details component, let's add in the logic to hide and show this view.</p> 
        <ul className="setup__steps">
          <li>
            <p>Start by importing `VenueDetails` in `Map.js`</p>
            <Highlight lang='javascript' value={venueImport} />
          </li>
          <li>
            <p>Create a close detail function in our Map component that we can pass to VenueDetails. This will clear our the selected item and show the ResultsList again.</p>
            <Highlight lang='javascript' value={closeDetails} />
          </li>
          <li>
            <p>Finally, we will add a couple expressions to show either the ResultsList or the VenueDetails based on if we have selected and item or not. Be sure to pass in `venue` and `closeDetails` to our VenueDetails component.</p>
            <Highlight lang='javascript' value={mainLogic} />
          </li>
          <li>
            <p>And there we have it. You should now be able to select a map item in your bar finder app.</p>
          </li>
        </ul>

        <h2>Back Bar</h2>
        <p>Let's add in a quick back bar component so we can get back to the home screen.</p> 
        <ul className="setup__steps">
          <li>
            <p>Create a file called `BackBar.js`</p>
          </li>
          <li>
            <p>Add in a basic view, TouchableOpacity, and Image for the back arrow icon. We just used the Material Icons `back-arrow` for this.</p>
            <Highlight lang='javascript' value={backBar} />
          </li>
          <li>
            <p>Back in `Map.js` import our BackBar as well as, NavigationActions from 'react-navigation'. We will need this to dispatch the back action in our navigator.</p>
            <Highlight lang='javascript' value={navactions} />
          </li>
          <li>
            <p>Next, create a function call goHome. This function should call closeDetails to make sure we clear any selections, then dispatch the back action we created in the previous step.</p>
            <Highlight lang='javascript' value={goHome} />
          </li>
           <li>
            <p>Finally, add in the necessary JSX to render the BackBar and pass in `this.goHome` as the `navigate` property.</p>
            <Highlight lang='javascript' value={goHomeJsx} />
          </li>
          <li>
            <p>And there we have it. We have a fully functioning app! It has an awesome map view with details, and a back bar to take us back home. All we need now is some killer data to bring this app alive.
              Be sure to make it to the next workshop as we will add in our Redux store and wire up our APIs. Congrats on making it this far!</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default ListItemDetail
