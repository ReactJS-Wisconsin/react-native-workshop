import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

const payload = `{
"bars": [
  {
    "distance": 6118.648599809836,
    "name": "Draft and Vessel",
    "description": "Beer-centric joint with a vintage, industrial feel offering craft brews on tap & growlers to go.",
    "avgRating": 4.8,
    "location": {
      "_id": "59cbb7dfa6b1a20004107fd8",
      "coordinates": [
        -87.887697,
        43.096066
      ],
      "type": "Point"
    },
    "__v": 0,
    "_id": "59cbb7dfa6b1a20004107fd7"
  },
  {
    "distance": 6119.3400203655265,
    "name": "Camp Bar Third Ward",
    "description": "Bar games, Happy hour drinks, Fast Service",
    "avgRating": 4.4,
    "location": {
      "_id": "59cbb67ea6b1a20004107fcc",
      "coordinates": [
        -87.903601,
        43.031485
      ],
      "type": "Point"
    },
    "__v": 0,
    "_id": "59cbb67ea6b1a20004107fcb"
  },
  {
    "distance": 6119.373008696231,
    "name": "Whiskey Bar",
    "description": "Swanky, hip bar featuring handcrafted cocktails, frequent nightlife events & a weekend dance floor.",
    "avgRating": 3.9,
    "location": {
      "_id": "59cbb59fa6b1a20004107fca",
      "coordinates": [
        -87.903931,
        43.040927
      ],
      "type": "Point"
    },
    "__v": 0,
    "_id": "59cbb59fa6b1a20004107fc9"
  },
  {
    "distance": 6119.522614752372,
    "name": "Millioke",
    "description": "Stylish tavern featuring meat & cheese boards, classic American fare & craft beer on tap.",
    "avgRating": 4.4,
    "location": {
      "_id": "59cbb460a6b1a20004107fc0",
      "coordinates": [
        -87.906974,
        43.038502
      ],
      "type": "Point"
    },
    "__v": 0,
    "_id": "59cbb460a6b1a20004107fbf"
  },
  {
    "distance": 6119.5293951072545,
    "name": "42 Lounge",
    "description": "Geeky nightclub with playable gaming consoles, barcraft, cosplay events & gaming-themed cocktails.",
    "avgRating": 4.5,
    "location": {
      "_id": "59baa132ce8020d7d665731d",
      "coordinates": [
        -87.907054,
        43.040089
      ],
      "type": "Point"
    },
    "__v": 0,
    "_id": "59baa132ce8020d7d665731c"
  },
  {
    "distance": 6119.878583209972,
    "name": "Ale Asylum Riverhouse",
    "description": "Locally brewed beer & updated tavern fare are served in a spacious riverfront space with a patio.",
    "avgRating": 4.3,
    "location": {
      "_id": "59cbb4f5a6b1a20004107fc2",
      "coordinates": [
        -87.913812,
        43.044535
      ],
      "type": "Point"
    },
    "__v": 0,
    "_id": "59cbb4f5a6b1a20004107fc1"
  }
]
}
`

class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. The Bar Finder API</h1>

        <h2>Endpoint</h2>
    
        <Highlight lang='javascript' value={`'https://nm-bar-finder.herokuapp.com/api/v1/bar/search?name=draft&long=0&lat=0'`} />

        <p>
          As you can see our api has the ability to search for bar names that are close to the submitted lat and long coordinates given.
          We will use this endpoint to search for bars and populate our state with the start results.
        </p>

        <h2>Json Payload</h2>
        
        <Highlight lang='json' value={payload} />
      </div>
    )
  }
}

export default SearchUiView
