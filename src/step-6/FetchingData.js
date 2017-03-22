import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

const loader = `
class Loader extends React.Component {
  render(){
    return (<Text>Loading...</Text>);
  }
}`;

const listOne = `
class ArticlesScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

    constructor(props) {
      super(props)
      this.state = {
        hasFetched: false,
        dataSource: '[placeholder]'
      };
    }

  render() {
    const { hasFetched, dataSource } = this.state;
    return (
      <View>
        {hasFetched ?
          {dataSource}
            : <Loader />
        }
      </View>
    );
  }
}`;


const listTwo = `
import React from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';

// ...

class ArticlesScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

    constructor(props) {
      super(props)
      this.state = {
        hasFetched: false,
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      };
    }
  componentDidMount(){
    makeFetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
      this.setState(()=> {
        return {
          hasFetched: true,
          dataSource: this.state.dataSource.cloneWithRows(data)
        };
      })
    })
  }
  render() {
    const { hasFetched, dataSource } = this.state;
    return (
      <View>
        {hasFetched ?
          <ListView
              dataSource={dataSource}
              renderRow={(rowData) => <Text>{rowData.title}</Text>}
            />
            : <Loader />
        }
      </View>
    );
  }
}`;


const fetch = `
const checkStatus = (response) => {
  if (!response.ok) { // status in the range 200-299 or not
    return Promise.reject(new Error(response.statusText || 'Status not OK'))
  }
  return response
}

const parseJSON = (response) => response.json()

const makeFetch = (url, options) => fetch(url, options)
  .then(checkStatus)
  .then(parseJSON)`;

class FetchingData extends Component {
  render() {
    return(
      <div className="general">
        <h1>6. Fetching Data</h1>
<p>We are going to use the fetch api to fetch data from a remote data source and populate a built in react-native `ListView` component.</p>

<ul className="setup__steps">
  <li>
    <p>First we need to create a simple fetch helper to parse and handle our responses.</p>
    <Highlight lang="javascript" value={fetch} />
  </li>
  <li>
    <p>Next, create a simple loader to display while we are fetching our data.</p>
    <Highlight lang="javascript" value={loader} />
  </li>
  <li>
    <p>Now, wire up our `ArticlesScreen` component state to handle our `Loader` and data loading state changes.  At this point, verify everything is rendering as expected.</p>
    <Highlight lang="javascript" value={listOne} />
    <Note type="tips">
      <p><span>Note: </span> In order to view the `ArticlesScreen` you will need to use the button created in previous section to navigate to the screen!</p>
    </Note>
  </li>
  <li>
    <p>Finally, we can wire everything up using `react-native` built in `ListView` component and populate our state on fetch success.</p>
    <Highlight lang="javascript" value={listTwo} />
  </li>
  <li>
    <p>Finished! we should now see data populated on our screen, ugly and unstyled!</p>
  </li>
  </ul>

      </div>
    );
  }
}

export default FetchingData;
