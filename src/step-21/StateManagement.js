import React, { Component } from 'react'
// import Highlight from 'react-syntax-highlight'
// import Note from '../Note'

import reduxImage from './redux.jpeg'
// import iconRowShot from './icon-row-shot.png'
// import searchInputShot from './search-field-shot.png'

// const imports = `import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Image,
//   TouchableOpacity
// } from 'react-native'`


// const routeCode = `const Routes = StackNavigator({
//   Home: { screen: HomeScreen },
//   Map: { screen: MapScreen }
// }, {
//   headerMode: 'none'
// });
// `

class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>21. State Management. What it is and why would we need it?</h1>
        <p>
          At this point our bar finder app is starting to get a bit more complex. As we start to think about how to 
          fetch data, how to manage data, and how to share this logic across the components in our app, we can see that we 
          may need some sort of library or set of shared functions to help us acheive this.
          <br /><br />
          You could argue here that just using React's setState function and the ability to pass props down to components is enough.
          It actually is enough for small applications and our app may be small enough to get away with doing that.
          <br /><br />
          As more and more actions start to accumulate though you will start to notice that it is a bit of a pain to manage this 
          on your own. Even more of a pain to debug the data and state of all your components.
          <br /><br />
          What if took all of our app's data and component state and consilidated it into a single state tree? That would allow us
          to see the state of the entire application in one place. And if we make that state immutable, as in, you always create
          a new instance of the state anytime we make a change, we can see every update along the way.
          <br /><br />
          Enter Redux, a predictable state container for JavaScript apps. 
        </p>

        <h2>Three Principles of Redux</h2>

        <p>1.) Single Source of Truth - The state of your whole application is stored in an object tree within a single store.</p>
        <p>2.) State is Read Only - The only way to change the state is to emit an action, an object describing what happened.</p>
        <p>3.) Changes are Made by Reducers - To specify how the state tree is transformed by actions, you write pure reducers.</p>

        <a href='http://redux.js.org/docs/introduction/ThreePrinciples.html'>Redux Docs</a>

        <h2>Redux Lifecycle</h2>
        <p>Lets take a look at these principles in action.</p>

        <img src={reduxImage} style={{height: '30rem'}} />

        <h2>Alternatives</h2>
        <p> Although Redux is the most popular option, there are a handful of options available. </p>
        <ul>
          <li><a href="https://github.com/mobxjs/mobx">MobX</a></li>
          <li><a href="http://alt.js.org/">Alt</a></li>
          <li><a href="https://github.com/Yomguithereal/baobab">Baobab</a></li>
        </ul>

      </div>
    )
  }
}

export default SearchUiView
