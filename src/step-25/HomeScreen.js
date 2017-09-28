import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

const payload = `// codes`

const HomeScreen = `class HomeScreen extends React.Component {
  static navigationOptions () {
    return { title: 'Welcome' }
  }

  constructor (props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)

    // Go get our location
    navigator.geolocation.getCurrentPosition(data => this.state.location = data, error => console.log('GEO ERROR', error))

    this.state = {
      searchString: '',
      location: null
    }

    console.log('CURRENT POSITION: ', this.state.location)
  }`

const manifest = `<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />`

const imports = `
import { connect } from 'react-redux'
import { searchBars } from './../store/actions/actions'
`

const connect = `
export default connect(null, dispatch => {
  return {
    doSearch: (text, lat, long) => dispatch(searchBars(text, lat, long))
  }
})(HomeScreen)
`

const clickHandler = `clickHandler () {
  const { navigation, doSearch } = this.props
  const { searchString, location } = this.state
  doSearch(searchString, location.coords.latitude, location.coords.longitude).then(() => navigation.navigate('Map', { searchString: this.state.searchString }))
  // should add a catch block in case there is an error. We would want to stay here and display the error message instead of naving to Map.
}`

class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. Connect the HomeScreen Component</h1>

        <ul className="setup__steps">
          <li>
            <p>We know we will need latitude and longitude of our device. Lets grab that from the <a href='https://facebook.github.io/react-native/docs/geolocation.html'>Geolocation</a> API, which is global in React Native.</p>
            <Highlight lang='javascript' value={HomeScreen} />
            
            <Note>If you are using android emulator, be sure to add this to your AndroidManifest.xml</Note>
            <Highlight lang='xml' value={manifest} />
          </li>
          <li>
            <p>Next, import the connect function from react-redux and the searchBars action from our action creators.</p>
            <Highlight lang='xml' value={imports} />
          </li>
          <li>
            <p>Now, connect the HomeScreen app to the Redux store and map the action for searchBars.</p>
            <Highlight lang='javascript' value={connect} />
          </li>
          <li>
            <p>Finally, update the clickHandler to dispatch our action and send in the search string, lat, and long</p>
            <Highlight lang='javascript' value={clickHandler} />
          </li>
          <li>
            <p>Now that we have triggered our fetch call and received the data in our redux store, we can wire up the data in the Map component. Head to the next step to get started.</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default SearchUiView
