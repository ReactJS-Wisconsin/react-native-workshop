import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
// import Note from '../Note'

import structurePng from './Structure.png'

const indexJs = `import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { fetchInitialState } from './store/actions/actions';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configure-store';
import MapScreen from './components/Map'
import HomeScreen from './components/HomeScreen'

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen }
}, {
  headerMode: 'none'
})

const store = configureStore();

// If we need to fetch some intial data we can do that now! Dispatch an action!
// store.dispatch(fetchInitialState());

// Console out changes to the store for easy debugging.
store.subscribe(() => {
    console.log('State Change: ', store.getState());
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('barfinder', () => App)
`

const ConfigureStore = `import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}`

const ActionTypes = `export const SEARCH_START = 'SEARCH_START'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_ERRROR = 'SEARCH_ERROR'`

const Actions = `import * as ActionTypes from './action-types';
import * as helpers from './helpers';
import config from 'react-native-configs';

export function searchBars(text, lat, long) {
    return (dispatch) => {
        dispatch(helpers.startAction(ActionTypes.SEARCH_START))
        return fetch(\`\${config.barApi}?lat=\${lat}&long=\${long}&name=\${text}\`).then((response) => {
            if(response.status !== 200){
                throw new Error('error', response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            return dispatch(helpers.successAction(ActionTypes.SEARCH_SUCCESS, json))
        })
        .catch((error) => {
            console.log(error);
            dispatch(helpers.failureAction('ERROR', error))
        });
    };
}

// Here is how we can structure a call to fetch some initial app data. See the comment in indes.ios.js
// export function fetchInitialState() {
//     return (dispatch) => {
//         dispatch(fetchsomething());
//     };
// }
`

const Helpers = `export function startAction(type) {
  console.log('start action ', type);
  return { type };
}

export function successAction(type, json) {
  console.log('success action ', type);
  return { type, payload: json};
}

export function failureAction(type, error) {
  console.log('failure action ', type, error);
  return { type, payload: error, error: true };
}`

const ReducerIndex = `import {combineReducers} from 'redux';
import search from './search';

const rootReducer = combineReducers({
  search
});

export default rootReducer`

const SearchReducer = `import * as ActionTypes from './../actions/action-types';
import _ from 'lodash';

const initialState = {
    results: [],
    error: null
};

export default function search(state = initialState, { type, payload }) {
    switch(type){
        case ActionTypes.SEARCH_START:
            return _.assign({}, state, { isLoading: true });

        case ActionTypes.SEARCH_SUCCESS:
            return _.assign({}, state, { results: payload });

        case ActionTypes.SEARCH_ERRROR:
            return _.assign({}, state, { results: payload });

        default:
            return state;
    }
}`



class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. Store Setup!</h1>
       
        <ul className="setup__steps">
          <li>
            <p>
              Now that we have a clean entry file, we can use it to intialize our redux store. Let's update our index files.
            </p>
            <Highlight lang='javascript' value={indexJs} />
          </li>
          <li>
            <p>Now lets add all the supporting files. I will go over these one by one but for now just copy them over</p>
          </li>
          <li>
            <p>configure-store.js</p>
            <Highlight lang='javascript' value={ConfigureStore} />
          </li>
          <li>
            <p>/actions/action-types.js</p>
            <Highlight lang='javascript' value={ConfigureStore} />
          </li>
          <li>
            <p>/actions/actions.js</p>
            <Highlight lang='javascript' value={Actions} />
          </li>
          <li>
            <p>/actions/helpers.js</p>
            <Highlight lang='javascript' value={Helpers} />
          </li>
          <li>
            <p>/reducers/index.js</p>
            <Highlight lang='javascript' value={ReducerIndex} />
          </li>
          <li>
            <p>/reducers/search.js</p>
            <Highlight lang='javascript' value={SearchReducer} />
          </li>
         
        </ul>
      </div>
    )
  }
}

export default SearchUiView
