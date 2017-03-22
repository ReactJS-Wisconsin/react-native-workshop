import React, {Component} from 'react';
import Note from '../Note';
import Highlight from 'react-syntax-highlight';

const editText =`// App.js
// ..

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Edit some text to see your app work!</Text> // heyo!
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
// ...

`;

class UpAndRunning extends Component {
  render() {

    return(
      <div className="general">
        <h1>3. Up & Running</h1>

<p>Time to start editing code and get familiar with your dev environment.</p>
        <ul className="setup__steps">
<li>Open your newly created app inside your favorite text editor</li>
<li>Take a peek inside package.json to see your apps dependancies and scripts</li>
<li>Open up App.js and edit the text, save, and see your changes hot reload on your phone
          <Highlight lang='javascript' value={editText} />
</li>
</ul>
<h2>Common commands</h2>
<ul>
<li>`Ctrl + c` to stop the app </li>
<li>`npm start` to fire the app up again</li>
</ul>


<Note type="facts"><p><span>Note: </span> If you are having trouble, ask the guy next to you for help!  Do not sit stuck :)</p></Note>


      </div>
    );
  }
}

export default UpAndRunning;
