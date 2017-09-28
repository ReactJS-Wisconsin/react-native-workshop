import React, { Component } from 'react'
import reduxImage from './redux.jpeg'

class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>21. Congratulations! You Did it!</h1>
        <p>
         We now have a (mostly) functioning bar finder! I say mostly because as you can tell we are far from being ready for the app store but hopefully this workshop
         gave you a good introduction on what it takes to to build an app in React Native.
        </p>

        <h2>Whats Missing</h2>

        <ul className="setup__steps">
          <li>Actual Device Location</li>
          <li>Jump to Maps when directions are requested</li>
          <li>More sophisticated search and results</li>
          <li>User Accounts</li>
        </ul>

        <h2>Solution Repo</h2>

        <a href='https://github.com/ajzozakiewicz/react-native-workshop-4-solution'>https://github.com/ajzozakiewicz/react-native-workshop-4-solution</a>

      </div>
    )
  }
}

export default SearchUiView
