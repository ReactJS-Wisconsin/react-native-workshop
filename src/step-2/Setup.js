import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';

class Setup extends Component {
  render() {
    const gitClone = '$ git clone -b sample https://github.com/';
    const installDependencies = '$ npm install';
    const runProject = '$ npm run server';
    return(
      <div className="setup">
        <h1>2. Setup</h1>
        <p>To setup the project, follow the below steps.</p>
        <h2>Steps</h2>
        <ul className="setup__steps">
          <li>Clone the repository via command line.</li>

          <Highlight lang="bash" value={gitClone} />

          <li>If you dont have node installed in your system. Download and install it from below.</li>

          <a className="btn" href="https://nodejs.org/en/download/" target="_blank">Download Node</a>

          <li>Install the dependencies to run localhost server.</li>

          <Highlight lang="bash" value={installDependencies} />

          <li>Run the project sample.</li>

          <Highlight lang="bash" value={runProject} />
        </ul>

        <p>Thats it. Setup is done.</p>
      </div>
    );
  }
}

export default Setup;
