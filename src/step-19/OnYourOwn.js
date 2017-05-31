import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class OnYourOwn extends Component {
  render() {
    return(
      <div>
        <h1>19. On your own</h1>
        <p>In the next workshop, we will be create a Redux store to house our apps state and wire up the APIs to retreive real data and make out bar finder come alive!</p>
        <h2>Home Work</h2>
        <ul>
          <li>Learn about Redux, we will use it to manage all of our state and date within our app - <a href='http://redux.js.org/'>http://redux.js.org/</a></li>
          <li>We will also be using the fetch method to get our data, check out the details here - <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' target='_blank'>Using Fetch - MDN</a></li>
        </ul>
      </div>
    );
  }
}

export default OnYourOwn;
