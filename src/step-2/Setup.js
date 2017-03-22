import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class Setup extends Component {
  render() {
    const crnaInstall = '$ npm install -g create-react-native-app';
    const generateApp = '$ create-react-native-app my-app';
    const runProject = '$ cd my-app/ && npm start';
    return(
      <div className="setup">
        <h1>2. Setup</h1>
        <p>To get started, we must first install `create-react-native-app` following the below steps.  No Xcode or Android Studio installation is required.</p>
        <h2>Steps</h2>
        <ul className="setup__steps">
          <li>Globally install `create-react-native-app` from the command line.  (On MacOS you may need to use `sudo`)</li>

          <Highlight lang="bash" value={crnaInstall} />

          <p>If you dont have node or npm installed in your system. Download and install it.  Also see <a href="#/prerequisites">Prerequisites</a></p>


          <li>Generate a new app using `create-react-native-app` in your chosen project directory.  This will create a directory called `my-app` inside the current working directory. Inside `my-app`, this will generate the initial project structure and install all of its dependencies.</li>

          <Highlight lang="bash" value={generateApp} />

          <li>Navigate to the newly created app{`'`}s directory and start the app.  This will start the React Native packager and print a QR code.  If you're familiar with React Native already, you won't find any ios or android directories in this project, just JavaScript.</li>
          <Highlight lang="bash" value={runProject} />




          <li>
          <p>Install the <a href="https://expo.io/">Expo app on your iOS or Android phone</a> (from app store), and use the QR code in the terminal to open your app. Find the QR scanner on the Projects tab of the app and scan the QR code.
</p>
<p>Thats it. Setup is done.  If things are working nicely you should now see your newly created app appear on your phone.</p>
          </li>



        </ul>

<Note type="tips"><p><span>Note: </span> Your phone and laptop need to be on the same network.</p></Note>

<Note type="facts"><p><span>Warning: </span> If the QR code does not work (Windows), you are going to have to partner up or create a project with the Expo Xde desktop app - <a href="https://github.com/exponent/xde">https://github.com/exponent/xde</a></p></Note>

        <h2>Reference Links</h2>
        <ul>
          <li><a href="https://github.com/react-community/create-react-native-app">create-react-native-app</a></li>
          <li><a href="https://expo.io/">Expo Client</a></li>
          <li><a href="https://facebook.github.io/react-native/docs/getting-started.html">(Plan B) install CLI & SDKs</a></li>
        </ul>
      </div>
    );
  }
}

export default Setup;
