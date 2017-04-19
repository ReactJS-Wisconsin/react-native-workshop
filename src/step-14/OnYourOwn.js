import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class OnYourOwn extends Component {
  render() {
    return(
      <div>
        <h1>14. On your own</h1>
        <p>In the following workshop, we will do deeper dive into building our app.  We will tackle styling our components, fetching real data, showing loading states, etc.</p>
        <h2>Home Work</h2>
        <ul>
          <li>Learn about Redux, we will use it to manage all of our state and date within our app - <a href='http://redux.js.org/'>http://redux.js.org/</a></li>
          <li>Bring questions for the next session.</li>
        </ul>
      </div>
    );
  }
}

export default OnYourOwn;
