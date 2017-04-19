import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';
import theapp from './theapp.png';
import arch from './arch.png';
import reduxs from './redux.png';
class Architecture extends Component {
  render() {
    return(
      <div>
        <h1>10. The App, Architecture</h1>
        <p>In the following workshops we will be building a map focused app called 'the bar finder'.  And will look like this:</p>
        <p><img style={{width: '100%'}}src={theapp}/></p>
        <p><a target='_blank' href={theapp}>See full size image >>></a></p>


<p>The app will allow users to search for a type of `drink` (e.g. beer, wine, cocktail, smoothie, etc.), see a list of results in a list and on a map, and then be able to click on a result and see details about the result.  Results will contain businesses that serve the drink user searched for.</p>
<h2>Features</h2>
        <ul className="setup__steps">
          <li>
            Splash screen
          </li>
          <li>
            Search, Search input
          </li>
          <li>
            Search results list, scrollable, sortable
          </li>
          <li>
            Browseable Map containing pins of search results
          </li>
          <li>
            Result detail view
          </li>
        </ul>

<h2>Fetching Data</h2>

<p><img style={{width: '100%'}}src={arch}/></p>
<p><a target='_blank' href={arch}>See full size image >>></a></p>



<h2>Redux</h2>
<p><img style={{width: '100%'}}src={reduxs}/></p>
<p><a target='_blank' href={reduxs}>See full size image >>></a></p>


<h2>Exercise: Design, Architect</h2>
<p>As a team answer the following questions:</p>
<ul className="setup__steps">

  <li>
  Where are we going to get our data?
  </li>
  <li>
  What will our data look like?  What format?
  </li>
  <li>
  How will we get our data?  What tools, libraries, etc. will we need to leverage?
  </li>
  <li>
What are some major considerations we need to keep in mind while building our app?
  </li>
  </ul>
      </div>
    );
  }
}

export default Architecture;
