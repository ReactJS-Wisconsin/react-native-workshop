import React, {Component} from 'react';
import Note from '../Note';

class Prerequisites extends Component {
  render() {
    return(
      <div className="general">
        <h1>0. Prerequisites</h1>
                <p>This workshop requires a laptop and a mobile device.  We will be using <a href="https://github.com/react-community/create-react-native-app">'create react native app'</a> (CRNA) during the workshop - under the hood CRNA uses the expo framework for minimal build configuration and short setup time.   CRNA 'should' work for both Windows and MacOS, Android, IOS; However, sometimes there are setup time and installation issues.  To ensure the smoothest possible setup, please go through the following steps before the workshop</p>
        <h2>Required devices</h2>
        <ul className="check-list">
          <li><b>Laptop</b> - Mac OS or Windows.</li>
          <li><b>Mobile Device</b> - IOS or Android.</li>
        </ul>
        <h2>Installs</h2>
        <ul>
          <li><strong>Required:</strong> Install the latest version of <a href="https://nodejs.org/">Node.js v6.10.0 LTS - https://nodejs.org/</a> - installing latest version of Node.js will also install latest version of NPM</li>
          <li><strong>Required:</strong> install the latest version of <a href="https://yarnpkg.com/en/docs/install">Yarn - https://yarnpkg.com/en/docs/install</a></li>
          <li><em>Recommended:</em> Follow Facebooks guide for getting started: https://facebook.github.io/react-native/docs/getting-started.html  Targeting Android and Windows or Mac OS</li>
          <li><em>Recommended:</em> Install expo xde: https://github.com/exponent/xde</li>
        </ul>

        <Note type="facts">
<p>When installing Yarn, in most cases a simple `npm install -g yarn` should do the trick.</p>
        </Note>
      </div>
    );
  }
}

export default Prerequisites;
